export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "how-to-keep-solid-gold-looking-new",
    category: "Care Guide",
    title: "How to keep solid gold looking new",
    excerpt: "A few simple habits that will keep your pieces bright for decades — no expensive products required.",
    image: "/assets/journal-1.jpg",
    date: "March 12, 2026",
    readTime: "4 min read",
    body: [
      "Solid gold is one of the few materials in the world designed to outlive us. Unlike plated or filled jewelry, it does not wear away, flake, or fade. But like anything you wear close to the skin, it does pick up the small residues of daily life — lotion, perfume, soap, the salt of a long summer afternoon.",
      "The good news is that caring for solid gold is almost embarrassingly simple. A bowl of warm water, a drop of mild dish soap, and a soft toothbrush are all you need. Soak your piece for a few minutes, brush gently around the settings, rinse, and pat dry with a soft cloth. That's it.",
      "We recommend doing this once a month for pieces you wear every day. For rings, especially, it's the single best habit you can build — most of what dulls a stone is just a thin film of soap and skin oil that has settled into the setting.",
      "What to avoid: ultrasonic cleaners (they can loosen older settings), chlorine pools for extended swims, and storing pieces piled together where they can scratch each other. A small fabric pouch per piece is plenty.",
      "And then — wear them. Gold is happiest in motion. The faint, soft patina it develops over years of being loved is part of the story.",
    ],
  },
  {
    slug: "the-art-of-the-everyday-stack",
    category: "Styling",
    title: "The art of the everyday stack",
    excerpt: "How to build a ring stack you'll actually wear every day, from one of our atelier stylists.",
    image: "/assets/journal-2.jpg",
    date: "February 28, 2026",
    readTime: "5 min read",
    body: [
      "The best ring stacks are not designed — they are collected. They begin with a single piece that means something, and grow slowly, the way a good wardrobe does, one quiet addition at a time.",
      "Start with an anchor. This is the ring you would wear if you could only wear one — usually something with a little weight, a signet, a slim band, or a solitaire. It sits on the finger you reach for most.",
      "From there, think in pairs. A second band on the same finger, slightly thinner, in the same metal. The eye reads it as one object with depth, rather than two competing pieces.",
      "Mix proportions, not metals. Stacks tend to fall apart when too many tones fight for attention. Pick one — yellow, white, or rose — and let texture and width do the variation. A hammered band next to a smooth one. A plain band next to one set with a tiny diamond.",
      "Leave a finger bare. Always. The empty space is what makes the rest of the hand feel intentional rather than crowded.",
      "And finally: wear the stack for a week before adding anything. The pieces that earn their place are the ones you forget you're wearing.",
    ],
  },
  {
    slug: "where-our-gemstones-come-from",
    category: "Sourcing",
    title: "Where our gemstones come from",
    excerpt: "A field note from our last visit to the small family-run mines we partner with in Sri Lanka.",
    image: "/assets/journal-3.jpg",
    date: "January 16, 2026",
    readTime: "6 min read",
    body: [
      "We flew into Colombo on a Tuesday and drove south through tea country to Ratnapura — the City of Gems. It is exactly what it sounds like: a small town built on top of one of the richest gemstone deposits in the world, where families have been mining sapphires by hand for generations.",
      "Our partners there run a single shaft mine that has been in the same family for four generations. The work is slow, careful, and almost entirely manual. Gravel is brought up in baskets, washed in shallow streams, and sorted by eye on woven mats.",
      "We visit twice a year. Not because we have to, but because it's the only way to know what you're buying. We sit on the floor with the sorters, look at every parcel, and choose the stones we want one by one. The ones that don't make it into Saphimère pieces stay there — sold locally, re-cut, or set aside for the next visit.",
      "It's a slower way to source gemstones, and it costs more. But it means we can tell you exactly which valley your sapphire came from, who pulled it out of the ground, and that they were paid fairly for their work.",
      "There are larger, faster supply chains. We are not interested in them. The pieces we make are meant to last several lifetimes — the least we can do is make sure the start of their story is one we're proud to tell.",
    ],
  },
];