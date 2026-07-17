import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-consistency-with-low-impact-rowing",
    title: "Building Consistency With Low-Impact Rowing",
    excerpt:
      "Why rowing is a strong foundation for sustainable cardio without beating up your joints.",
    date: "2026-06-25",
    readingTime: "4 min read",
    image: "/blog/consistency-rowing.svg",
    imageAlt: "Abstract teal water and rower silhouette for consistency training",
    sections: [
      {
        heading: "Start with repeatability",
        body:
          "The best workout plan is the one you can repeat. Rowing gives you a full-body cardio session while keeping impact lower than running or jumping-heavy routines.",
      },
      {
        heading: "Use simple training zones",
        body:
          "For an MVP routine, alternate easy steady rows with short interval days. You do not need complex programming to build momentum.",
      },
      {
        heading: "Measure consistency first",
        body:
          "Track completed sessions before chasing advanced metrics. Once the habit is stable, performance improvements become easier to layer in.",
      },
    ],
  },
  {
    slug: "at-home-workouts-that-actually-stick",
    title: "At-Home Workouts That Actually Stick",
    excerpt:
      "A practical framework for building a home fitness habit around energy, space, and time.",
    date: "2026-06-25",
    readingTime: "5 min read",
    image: "/blog/at-home-workouts.svg",
    imageAlt: "Warm amber abstract home workout illustration",
    sections: [
      {
        heading: "Remove friction",
        body:
          "A home workout setup works best when it removes excuses. Keep equipment visible, workouts short enough to start, and your plan simple.",
      },
      {
        heading: "Anchor workouts to routines",
        body:
          "Pair your workout with an existing habit, like morning coffee or ending the workday. The goal is to make the session feel automatic.",
      },
      {
        heading: "Keep the weekly plan boring",
        body:
          "Boring is underrated. Repeatable workouts beat constantly changing plans when your goal is long-term consistency.",
      },
    ],
  },
  {
    slug: "recovery-days-make-training-better",
    title: "Recovery Days Make Training Better",
    excerpt:
      "How mobility, sleep, and easier sessions help you train more consistently.",
    date: "2026-06-25",
    readingTime: "3 min read",
    image: "/blog/recovery-days.svg",
    imageAlt: "Calm sage green recovery and mobility illustration",
    sections: [
      {
        heading: "Recovery is part of training",
        body:
          "Easy days are not wasted days. They help you absorb training, reduce burnout, and come back stronger.",
      },
      {
        heading: "Use movement, not punishment",
        body:
          "A light row, walk, or mobility session can keep momentum without adding unnecessary fatigue.",
      },
      {
        heading: "Protect the next workout",
        body:
          "The best recovery decision is the one that helps you show up again tomorrow.",
      },
    ],
  },
];

export function getBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
