'use client';

import { useState } from 'react';
import CartSummary from '../cart-summary';

export default function CheckoutInfo() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>

        <section className="mt-4 sm:mt-6 rounded-3xl bg-white p-6 shadow-sm">
          <p className="mt-2 text-sm text-black/60">
            Enter your contact and shipping information below. You’ll review and
            complete your payment securely on the next step.
          </p>
          <form
            id="checkout-form"
            className="mt-6 space-y-6"
            onSubmit={handleSubmit}>
            <fieldset className="space-y-4">
              <legend className="text-lg w-full font-semibold rounded-md px-3 py-1 bg-[#f8f9fa] text-[#101820] border-l-4 border-[#101820] mb-2">
                Contact
              </legend>
              <div>
                <label
                  className="text-sm font-medium text-black/60"
                  htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-2 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#101820]"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg w-full font-semibold rounded-md px-3 py-1 bg-[#f8f9fa] text-[#101820] border-l-4 border-[#101820] mb-2">
                Shipping Address
              </legend>

              <div>
                <label
                  className="text-sm font-medium text-black/60"
                  htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  className="mt-2 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#101820]"
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-black/60"
                  htmlFor="address">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  className="mt-2 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#101820]"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    className="text-sm font-medium text-black/60"
                    htmlFor="city">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    className="mt-2 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#101820]"
                  />
                </div>

                <div>
                  <label
                    className="text-sm font-medium text-black/60"
                    htmlFor="postalCode">
                    Postal code
                  </label>
                  <input
                    id="postalCode"
                    name="postalCode"
                    autoComplete="postal-code"
                    className="mt-2 w-full rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-[#101820]"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>

      <aside>
        <h2 className="text-2xl font-semibold">Order Summary</h2>
        <div className="mt-4 sm:mt-6">
          <CartSummary />
        </div>
        <button
          type="submit"
          form="checkout-form"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#101820] px-5 py-3 text-sm font-semibold text-white hover:bg-[#24343b] focus:outline-none focus:ring-2 focus:ring-[#101820] focus:ring-offset-2">
          Continue to payment
        </button>
      </aside>
    </div>
  );
}
