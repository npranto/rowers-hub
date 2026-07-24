import { CartLineWithProduct, MAX_CART_QUANTITY } from '@/lib/cart';
import { getProductBySlug } from '@/lib/products';
import { getStripeClient } from '@/lib/stripe';
import { CartLine, Product } from '@/types';

export const runtime = 'nodejs';

export async function GET() {
  return new Response('`/api/checkout` - Checkout API Route');
}

const PRICE_ID_BY_PRODUCT_ID_MAPPING: Record<string, string | undefined> = {
  'hydrow-origin': process.env.STRIPE_PRICE_ID_HYDROW_ORIGIN,
  'hydrow-wave': process.env.STRIPE_PRICE_ID_HYDROW_WAVE,
  'hydrow-arc': process.env.STRIPE_PRICE_ID_HYDROW_ARC,
};

const isRealStripePriceId = (value: string | undefined): boolean => {
  return (
    typeof value === 'string' &&
    value?.startsWith('price_') &&
    !value?.includes('REPLACE')
  );
};

const getStripePriceId = (product: Product): string | undefined => {
  const priceId = PRICE_ID_BY_PRODUCT_ID_MAPPING[product.slug];
  return isRealStripePriceId(priceId) ? priceId : undefined;
};

const normalizeQuantity = (quantity: unknown): number => {
  if (typeof quantity !== 'number' || !Number.isFinite(quantity)) return 1;
  return Math.max(Math.min(Math.floor(quantity), MAX_CART_QUANTITY), 1);
};

function validateCart(items: CartLine[] | undefined): CartLineWithProduct[] {
  if (!Array.isArray(items)) return [];

  return items
    .map(item => {
      const product = getProductBySlug(item.slug);
      if (!product) return null;
      const quantity = normalizeQuantity(item.quantity);
      return {
        product,
        quantity,
      };
    })
    .filter((item): item is CartLineWithProduct => item !== null);
}

export async function POST(request: Request) {
  try {
    const {
      email,
      fullName,
      address,
      city,
      postalCode,
      items,
    }: {
      email: string;
      fullName: string;
      address: string;
      city: string;
      postalCode: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: any[];
    } = await request.json();

    if (!email || !fullName || !address || !city || !postalCode || !items) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const validatedCart = validateCart(items) as CartLineWithProduct[];

    if (validatedCart.length === 0) {
      return Response.json(
        {
          error:
            'Cart is empty. Please add items to your cart before checking out.',
        },
        { status: 400 },
      );
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      request.headers.get('origin') ||
      'http://localhost:3000';

    const metadataCart = JSON.stringify(
      validatedCart.map(item => ({
        slug: item.product.slug,
        quantity: item.quantity,
      })),
    );

    const lineItems = validatedCart.map(item =>
      isRealStripePriceId(getStripePriceId(item.product))
        ? {
            price: getStripePriceId(item.product),
            quantity: item.quantity,
          }
        : {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.product.name,
                description: item.product.description,
              },
              unit_amount: item.product.price,
            },
            quantity: item.quantity,
          },
    );

    const stripe = getStripeClient();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card', 'paypal'],
      customer_email: email || undefined,
      line_items: lineItems,
      success_url: `${siteUrl}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/checkout-cancel`,
      client_reference_id: `rowers-hub-1.0.0`,
      metadata: {
        cart: metadataCart,
        source: 'rowers-hub-1.0.0',
      },
      payment_intent_data: {
        description: `RowersHub - Checkout: ${validatedCart.map(item => item.product.name + ' x ' + item.quantity).join(', ')}`,
        metadata: {
          cart: metadataCart,
          source: 'rowers-hub-1.0.0',
        },
      },
    });

    if (!session.url) {
      return Response.json(
        { error: 'Failed to create Stripe checkout session' },
        { status: 500 },
      );
    }

    return Response.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error('Checkout session error:', error);
    return Response.json(
      {
        error:
          'Failed to create Stripe checkout session: ' +
          (error instanceof Error ? error.message : 'Unknown error'),
      },
      { status: 500 },
    );
  }
}
