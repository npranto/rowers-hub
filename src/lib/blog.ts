import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-consistency-with-low-impact-rowing',
    title: 'Building Consistency With Low-Impact Rowing',
    excerpt:
      'Why rowing is a strong foundation for sustainable cardio without beating up your joints.',
    date: '2026-06-25',
    readingTime: '9 min read',
    image: '/blog/consistency-rowing.svg',
    imageAlt:
      'Abstract teal water and rower silhouette for consistency training',
    content: [
      {
        type: 'paragraph',
        text: 'Most fitness plans fail for the same reason: they ask for intensity before they earn consistency. You start strong for ten days, feel sore, miss a session, then quietly abandon the whole thing. Rowing breaks that cycle because it delivers a serious full-body workout without the joint tax of running or high-impact HIIT.',
      },
      {
        type: 'paragraph',
        text: 'If your goal is to still be training three months from now—not just surviving a two-week challenge—low-impact rowing is one of the most reliable foundations you can build.',
      },
      {
        type: 'heading',
        text: 'Start with repeatability',
      },
      {
        type: 'paragraph',
        text: 'The best workout plan is the one you can repeat. That sounds obvious, but most programs optimize for novelty or peak performance instead of showing up. Rowing gives you a full-body cardio session while keeping impact lower than running or jumping-heavy routines, which means you recover faster and miss fewer days.',
      },
      {
        type: 'paragraph',
        text: 'A repeatable session has three qualities: it fits your schedule, it does not leave you wrecked for two days, and it feels finished when you finish—not like you left something unfinished. Twenty to thirty minutes on the rower can check all three boxes.',
      },
      {
        type: 'image',
        src: '/blog/consistency-rowing.svg',
        alt: 'Abstract teal water and rower silhouette',
        caption: 'Low-impact sessions are easier to repeat week after week.',
      },
      {
        type: 'heading',
        text: 'Why joints love rowing',
      },
      {
        type: 'paragraph',
        text: 'Running is excellent, but every stride is a small collision. Over thousands of steps, those collisions add up—especially if you are returning from injury, carrying extra weight, or training on hard surfaces. Rowing keeps your feet planted and your load distributed across legs, core, and upper body.',
      },
      {
        type: 'paragraph',
        text: 'That does not mean rowing is effortless. A hard piece still raises heart rate, challenges lungs, and builds muscular endurance. It just means the cost of that effort lands differently. Less pounding, more pull. Less downtime between sessions, more weeks you actually complete.',
      },
      {
        type: 'heading',
        text: 'Use simple training zones',
      },
      {
        type: 'paragraph',
        text: 'You do not need a complicated periodization spreadsheet to get started. For an MVP routine, alternate easy steady rows with short interval days. Easy days build the aerobic base. Interval days raise the ceiling. Together they create progress without requiring you to reinvent the plan every Monday.',
      },
      {
        type: 'paragraph',
        text: 'On easy days, you should be able to hold a conversation—or at least speak in short sentences. On interval days, you should feel challenged, then recover enough to go again. If every session feels like a max effort, you are not training consistency; you are training burnout.',
      },
      {
        type: 'code',
        language: 'text',
        code: `Week template (beginner–intermediate)

Mon — Easy steady: 20–30 min @ conversational pace
Wed — Intervals: 6 × 1 min hard / 1 min easy
Fri — Easy steady: 25–35 min @ conversational pace

Optional Sat — Technique focus: 15 min very easy, pause to reset form
Rest or walk on the other days`,
      },
      {
        type: 'heading',
        text: 'A form checklist you can remember',
      },
      {
        type: 'paragraph',
        text: 'Consistency only helps if your stroke stays clean. Poor form under fatigue is how people end up with sore backs instead of stronger engines. Keep this short checklist in mind before you chase pace.',
      },
      {
        type: 'video',
        src: '/blog/rowing-form-sample.mp4',
        poster: '/blog/consistency-rowing.svg',
        caption:
          'Watch a short form walkthrough, then practice the sequence slowly before adding pace.',
      },
      {
        type: 'code',
        language: 'text',
        code: `Catch → Drive → Finish → Recovery

1. Catch: shins near vertical, arms long, torso leaning slightly forward
2. Drive: legs first, then swing open the hips, then pull the handle
3. Finish: handle to lower ribs, shoulders relaxed, core braced
4. Recovery: arms away, hinge forward, then slide — never rush the slide`,
      },
      {
        type: 'paragraph',
        text: 'If you only fix one habit this month, fix the sequence: legs, then body, then arms on the drive—and the reverse on the recovery. Most rushed strokes collapse that order and turn rowing into an arm workout with a sore lumbar surprise.',
      },
      {
        type: 'heading',
        text: 'Measure consistency first',
      },
      {
        type: 'paragraph',
        text: 'Track completed sessions before chasing advanced metrics. Split times, watts, and stroke rates are useful later. Early on, the scoreboard that matters is simpler: Did you show up three times this week? Did you finish what you planned?',
      },
      {
        type: 'paragraph',
        text: 'Once that habit is stable for four to six weeks, performance improvements become easier to layer in. Add five minutes to an easy row. Add one interval. Lower your resting heart rate target. Small upgrades compound when the base is already solid.',
      },
      {
        type: 'image',
        src: '/blog/recovery-days.svg',
        alt: 'Calm recovery and mobility illustration',
        caption:
          'Progress sticks when hard days and easy days both have a job.',
      },
      {
        type: 'heading',
        text: 'What “done” looks like after 30 days',
      },
      {
        type: 'paragraph',
        text: 'After a month of consistent low-impact rowing, you should notice quieter wins before dramatic ones: sessions feel less like a negotiation, breathing settles sooner into a rhythm, and the machine stops feeling foreign. Those are signs the habit is landing.',
      },
      {
        type: 'paragraph',
        text: 'Keep the plan boring a little longer. Boring is how consistency becomes identity. Once rowing is just something you do, then you can get ambitious—longer pieces, sharper intervals, maybe a charity challenge. First, earn the weeks.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Quick start for this week',
      },
      {
        type: 'paragraph',
        text: 'Pick three days. Put them on the calendar. Cap each session at thirty minutes. Write down only one metric: completed or not. That is enough to begin building a foundation that lasts.',
      },
    ],
  },
  {
    slug: 'at-home-workouts-that-actually-stick',
    title: 'At-Home Workouts That Actually Stick',
    excerpt:
      'A practical framework for building a home fitness habit around energy, space, and time.',
    date: '2026-06-25',
    readingTime: '10 min read',
    image: '/blog/at-home-workouts.svg',
    imageAlt: 'Warm amber abstract home workout illustration',
    content: [
      {
        type: 'paragraph',
        text: 'Home workouts fail less often because of motivation and more often because of friction. The mat is in a closet. The plan lives in an app you forgot to open. The living room is mid-chaos. By the time you are ready, the window has closed.',
      },
      {
        type: 'paragraph',
        text: 'The fix is not a louder pep talk. It is a quieter system—one built around your real energy, real space, and real calendar. Here is a practical framework that helps at-home training stick past the first enthusiastic week.',
      },
      {
        type: 'heading',
        text: 'Remove friction before you add intensity',
      },
      {
        type: 'paragraph',
        text: 'A home workout setup works best when it removes excuses. Keep equipment visible. Choose workouts short enough that starting feels reasonable. Keep the plan simple enough that you do not need a briefing before every session.',
      },
      {
        type: 'paragraph',
        text: 'If your rower is buried behind storage bins, you will not row. If your workout requires seventeen pieces of gear, you will negotiate with yourself. Visibility and simplicity are not aesthetic preferences—they are adherence tools.',
      },
      {
        type: 'image',
        src: '/blog/at-home-workouts.svg',
        alt: 'Warm amber abstract home workout illustration',
        caption: 'A clear space and a short plan beat a perfect gym playlist.',
      },
      {
        type: 'heading',
        text: 'Design for energy, not willpower',
      },
      {
        type: 'paragraph',
        text: 'Willpower is a terrible long-term planner. Energy is more honest. Some people are sharp in the morning and foggy after work. Others need a transition ritual before they can train. Match the session to the energy you actually have, not the energy you wish you had.',
      },
      {
        type: 'paragraph',
        text: 'On low-energy days, shrink the session instead of skipping it. Ten minutes of easy rowing still protects the identity of “someone who trains.” Zero minutes teaches your brain that the plan is optional. Protect the streak with a smaller version of the work.',
      },
      {
        type: 'code',
        language: 'text',
        code: `Energy-based session menu

High energy  → 30–40 min: warm-up + intervals + cool-down
Medium energy → 20–25 min: steady row or light strength circuit
Low energy   → 10–12 min: easy technical row or mobility flow
Zero energy  → 5 min stretch + tomorrow’s start time written down`,
      },
      {
        type: 'heading',
        text: 'Anchor workouts to routines you already keep',
      },
      {
        type: 'paragraph',
        text: 'Pair your workout with an existing habit, like morning coffee or ending the workday. Habit stacking works because the cue already has momentum. You are not inventing a new trigger from scratch—you are attaching training to something that already happens.',
      },
      {
        type: 'paragraph',
        text: 'Examples that work well at home: row after you pour coffee and before you open email; strength work right after you shut the laptop; mobility while a show’s opening credits play. The goal is to make the session feel automatic, not heroic.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'A sample weekday anchor map',
      },
      {
        type: 'code',
        language: 'text',
        code: `Mon  — After coffee → 25 min easy row
Tue  — After work laptop close → 20 min strength
Wed  — After coffee → 20 min intervals
Thu  — After dinner cleanup → 15 min mobility
Fri  — After coffee → 30 min steady row
Sat  — Optional longer piece or outdoor walk
Sun  — Full rest or easy walk only`,
      },
      {
        type: 'heading',
        text: 'Claim a dedicated footprint',
      },
      {
        type: 'paragraph',
        text: 'You do not need a spare room. You need a footprint. Even a marked corner with a rower, a mat, and a water bottle creates a psychological “gym mode” switch. When the space is always ready, the decision becomes whether to start—not whether to assemble the environment first.',
      },
      {
        type: 'paragraph',
        text: 'If space is tight, treat setup and teardown as part of the workout timer. A two-minute setup tax is fine. A fifteen-minute scavenger hunt is not. Optimize for the path of least resistance between “I should train” and “I am training.”',
      },
      {
        type: 'image',
        src: '/blog/consistency-rowing.svg',
        alt: 'Abstract teal rower silhouette',
        caption:
          'One clear piece of equipment in a ready spot beats a closet full of unused gear.',
      },
      {
        type: 'heading',
        text: 'Keep the weekly plan boring',
      },
      {
        type: 'paragraph',
        text: 'Boring is underrated. Repeatable workouts beat constantly changing plans when your goal is long-term consistency. Variety feels productive because it is stimulating. Consistency feels productive because it compounds.',
      },
      {
        type: 'paragraph',
        text: 'Rotate between two or three session types for a month before you chase novelty. Master the easy row. Get comfortable with a simple interval format. Add one strength circuit you can do without thinking. Once those are automatic, small variations will feel like seasoning—not a new recipe every day.',
      },
      {
        type: 'heading',
        text: 'Track the right scoreboard',
      },
      {
        type: 'paragraph',
        text: 'At home, vanity metrics can derail you. You do not need a perfect weekly volume chart on day three. Track adherence first: sessions planned versus sessions completed. Then track how you felt: better, same, worse. Only after that should you obsess over pace or load.',
      },
      {
        type: 'code',
        language: 'text',
        code: `Weekly scoreboard (keep it tiny)

Planned sessions: 4
Completed: ___
Minimum viable sessions (10+ min): ___
Notes: energy / sleep / friction that got in the way`,
      },
      {
        type: 'heading',
        text: 'When life gets loud',
      },
      {
        type: 'paragraph',
        text: 'Travel, kids, deadlines, and bad sleep will arrive. Build a “floor” into your plan so the habit survives those weeks. The floor might be two ten-minute sessions. That is not failure—it is insurance. Heroes train when life is calm. Systems train when life is not.',
      },
      {
        type: 'paragraph',
        text: 'If you miss a day, do not “make it up” with punishment the next day. Resume the next scheduled session as written. Guilt-driven catch-up workouts are how home programs spiral into another restart on Monday.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Your first seven days',
      },
      {
        type: 'paragraph',
        text: 'Clear a footprint tonight. Choose three anchors for the week. Use the energy menu so no day requires perfection. Write completed or not after each session. That is enough structure to turn a home setup into a habit that lasts.',
      },
    ],
  },
  {
    slug: 'recovery-days-make-training-better',
    title: 'Recovery Days Make Training Better',
    excerpt:
      'How mobility, sleep, and easier sessions help you train more consistently.',
    date: '2026-06-25',
    readingTime: '8 min read',
    image: '/blog/recovery-days.svg',
    imageAlt: 'Calm sage green recovery and mobility illustration',
    content: [
      {
        type: 'paragraph',
        text: 'Hard training gets the credit. Recovery does the work behind the scenes. If you only celebrate the sweaty sessions, you will eventually discover the quiet truth: progress stalls when repair cannot keep up with stress.',
      },
      {
        type: 'paragraph',
        text: 'Recovery days are not the opposite of training. They are how training becomes sustainable—especially for rowers balancing intensity, desk jobs, and real life.',
      },
      {
        type: 'heading',
        text: 'Recovery is part of training',
      },
      {
        type: 'paragraph',
        text: 'Easy days are not wasted days. They help you absorb training, reduce burnout, and come back stronger. Adaptation happens after the session, not during it. Sleep, nutrition, and lower-intensity movement are what turn yesterday’s work into tomorrow’s capacity.',
      },
      {
        type: 'paragraph',
        text: 'Think of hard days as deposits of stress and recovery days as the clearing cycle that turns stress into fitness. Skip the clearing cycle long enough and you are not tough—you are overdrawn.',
      },
      {
        type: 'image',
        src: '/blog/recovery-days.svg',
        alt: 'Calm sage green recovery and mobility illustration',
        caption: 'Easy movement keeps momentum without stacking fatigue.',
      },
      {
        type: 'heading',
        text: 'Use movement, not punishment',
      },
      {
        type: 'paragraph',
        text: 'A light row, walk, or mobility session can keep momentum without adding unnecessary fatigue. The point is blood flow, range of motion, and a calm nervous system—not proving you can still suffer on a rest day.',
      },
      {
        type: 'paragraph',
        text: 'If your recovery session leaves you more exhausted than a normal easy day, it was not recovery. Rename it as training and adjust the week. Language matters because it sets the intensity you allow yourself to chase.',
      },
      {
        type: 'code',
        language: 'text',
        code: `Recovery session menu (pick one)

• 15–25 min very easy row (nasal breathing if possible)
• 20–40 min easy walk outdoors
• 10–15 min mobility circuit (hips, T-spine, ankles)
• Easy bike or swim at conversation pace

Rule: finish feeling better than you started.`,
      },
      {
        type: 'heading',
        text: 'Sleep is the highest-ROI recovery tool',
      },
      {
        type: 'paragraph',
        text: 'You can foam-roll for an hour and still under-recover if sleep is a mess. Aim for a consistent wind-down, a dark room, and a schedule that does not swing wildly between weeknights and weekends. Perfect sleep is rare; regular sleep is powerful.',
      },
      {
        type: 'paragraph',
        text: 'If you only improve one recovery habit this month, protect a realistic bedtime on training nights. Your next interval session will feel different when your brain and tissues actually got the memo to repair.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'A simple sleep guardrail',
      },
      {
        type: 'code',
        language: 'text',
        code: `Night-before hard session checklist

• Screens dimmed 45–60 min before bed
• Caffeine cutoff mid-afternoon
• Light snack if you train fasted in the morning
• Same approximate bedtime ±30 minutes
• Phone outside the pillow zone`,
      },
      {
        type: 'heading',
        text: 'Mobility that respects rowing',
      },
      {
        type: 'paragraph',
        text: 'Rowers need hips that hinge, thoracic spines that rotate and extend, and ankles that let the shins travel at the catch. You do not need an hour-long yoga odyssey. You need a short list of positions you revisit often.',
      },
      {
        type: 'paragraph',
        text: 'Five to ten minutes after an easy session is enough to maintain access to good positions. Consistency beats intensity here, too. A daily short mobility practice outperforms a heroic weekend stretch session you dread.',
      },
      {
        type: 'image',
        src: '/blog/at-home-workouts.svg',
        alt: 'Warm abstract home training illustration',
        caption:
          'Short mobility at home compounds faster than occasional long sessions.',
      },
      {
        type: 'code',
        language: 'text',
        code: `10-minute rower mobility circuit

1. World’s greatest stretch — 4/side
2. Couch stretch or hip flexor rock — 60s/side
3. Open-book thoracic rotations — 6/side
4. Ankle rocks at a wall — 10/side
5. Cat-cow + child’s pose — 60–90s easy breathing`,
      },
      {
        type: 'heading',
        text: 'Protect the next workout',
      },
      {
        type: 'paragraph',
        text: 'The best recovery decision is the one that helps you show up again tomorrow. That might mean skipping the extra hard piece when sleep was short. It might mean eating a real meal after training instead of grazing. It might mean going to bed even when a show is mid-season.',
      },
      {
        type: 'paragraph',
        text: 'Recovery is strategic, not soft. Athletes who last treat easy days with the same seriousness as hard days—because they understand the week is a system, not a collection of isolated hero moments.',
      },
      {
        type: 'heading',
        text: 'A sample week with recovery built in',
      },
      {
        type: 'paragraph',
        text: 'You do not need perfect symmetry. You need contrast: stress, then absorb, then stress again. Here is one way to arrange a rower-friendly week without turning rest into an afterthought.',
      },
      {
        type: 'code',
        language: 'text',
        code: `Sample week

Mon — Steady aerobic row (moderate)
Tue — Mobility + easy walk (recovery)
Wed — Intervals (hard)
Thu — Very easy technical row or full rest
Fri — Steady row or light strength
Sat — Optional longer easy piece
Sun — Rest or gentle mobility only

If life stress spikes, demote Wed to steady and keep the week intact.`,
      },
      {
        type: 'heading',
        level: 3,
        text: 'Signs you need more recovery',
      },
      {
        type: 'paragraph',
        text: 'Watch for resting heart rate creeping up, motivation flattening, sleep getting lighter, and paces that feel inexplicably harder. Those are early signals—not badges of honor. Respond early with an easier day and you usually avoid the forced week off later.',
      },
      {
        type: 'paragraph',
        text: 'Train hard enough to adapt. Recover well enough to repeat. That is the whole game.',
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
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function formatBlogPostDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`));
}
