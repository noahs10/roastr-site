// src/data/mockBeanData.ts

export type Review = {
  user: string;
  emoji: string;
  title: string;
  content: string;
};

export type Bean = {
  slug: string;
  image: string;
  roaster: string;
  name: string;
  score: number;
  ratings: number;
  description: string;
  origin: string;
  variety: string;
  elevation: string;
  process: string;
  tasteProfile: string[];
  reviews: Review[];
};

// Optional: restrict valid slugs if needed
export type BeanSlug = "rose-nebula" | "holy-muria" | "aceh-extended-natural";

// ✅ Strongly typed object with literal keys
export const mockBeanData: Record<BeanSlug, Bean> = {
  "rose-nebula": {
    slug: "rose-nebula",
    image: "/rose.png",
    roaster: "People Temple Roastery",
    name: "Rose Nebula Yunnan Anaerobic Yeast Natural",
    score: 75,
    ratings: 212,
    description: "Generally Liked",
    origin: "Garut, Central Java",
    variety: "Catimor",
    elevation: "1700 masl",
    process: "Anaerobic Yeast Natural",
    tasteProfile: ["Pomegranate", "Rose", "Cranberry"],
    reviews: [
      {
        user: "Ricky A",
        emoji: "🤔",
        title: "Mixed feelings",
        content:
          "Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!",
      },
      {
        user: "Kevin1021",
        emoji: "😍",
        title: "Would buy again!",
        content:
          "Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!",
      },
    ],
  },
  "holy-muria": {
    slug: "holy-muria",
    image: "/koeslan.png",
    roaster: "Koeslan Coffee Roastery",
    name: "The Holy Muria Natural Anaerobic",
    score: 90,
    ratings: 100,
    description: "Loved by Most",
    origin: "Muria, Central Java",
    variety: "Unknown",
    elevation: "1300 masl",
    process: "Natural Anaerobic",
    tasteProfile: ["Berry", "Honey", "Floral"],
    reviews: [
      {
        user: "Ricky A",
        emoji: "🤔",
        title: "Mixed feelings",
        content:
          "Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!",
      },
      {
        user: "Kevin1021",
        emoji: "😍",
        title: "Would buy again!",
        content:
          "Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!",
      },
    ],
  },
  "aceh-extended-natural": {
    slug: "aceh-extended-natural",
    image: "/aceh.png",
    roaster: "People Temple Roastery",
    name: "Aceh Extended Natural",
    score: 82,
    ratings: 212,
    description: "Generally Liked",
    origin: "Aceh, Sumatra",
    variety: "Typica",
    elevation: "1400 masl",
    process: "Extended Natural",
    tasteProfile: ["Chocolate", "Dried Fruit", "Spice"],
    reviews: [
      {
        user: "Ricky A",
        emoji: "🤔",
        title: "Mixed feelings",
        content:
          "Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!",
      },
      {
        user: "Kevin1021",
        emoji: "😍",
        title: "Would buy again!",
        content:
          "Bikin pakai v60 kemaren pas dateng. acidity nya bright banget dan clean cup. Rasa pomegranate nya berasa, dan floral rose nya mantep sih. rekomen!",
      },
    ],
  },
};
