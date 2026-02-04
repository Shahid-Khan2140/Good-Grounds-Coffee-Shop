export interface BrewStep {
  instruction: string;
  duration?: number; // seconds
}

export interface BrewGuide {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  totalTime: string;
  image: string; // url or placeholder
  steps: BrewStep[];
}

export const brewGuides: BrewGuide[] = [
  {
    id: "v60",
    title: "V60 Pour Over",
    description: "A clean, floral cup that highlights the nuanced notes of the bean.",
    difficulty: "Medium",
    totalTime: "3:00",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=1000",
    steps: [
      { instruction: "Heat water to 94°C (201°F) and rinse the filter.", duration: 30 },
      { instruction: "Add 15g of medium-fine coffee grounds.", duration: 10 },
      { instruction: "Pour 30g of water for the bloom. Swirl specifically.", duration: 45 },
      { instruction: "Pour water in a spiral motion up to 250g total weight.", duration: 90 },
      { instruction: "Let it drawdown completely.", duration: 30 },
      { instruction: "Serve and enjoy!", duration: 0 },
    ],
  },
  {
    id: "french-press",
    title: "French Press",
    description: "Rich, full-bodied coffee with a heavy mouthfeel.",
    difficulty: "Easy",
    totalTime: "4:00",
    image: "https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?auto=format&fit=crop&q=80&w=1000",
    steps: [
      { instruction: "Add 30g of coarse coffee grounds.", duration: 10 },
      { instruction: "Pour 500g of hot water (95°C).", duration: 30 },
      { instruction: "Stir gently to saturate grounds.", duration: 10 },
      { instruction: "Place lid on and wait (do not plunge yet).", duration: 240 },
      { instruction: "Press the plunger down slowly.", duration: 20 },
      { instruction: "Pour immediately to stop extraction.", duration: 0 },
    ],
  },
  {
    id: "aeropress",
    title: "Aeropress",
    description: "Versatile and quick, producing a smooth, espresso-like cup.",
    difficulty: "Easy",
    totalTime: "2:00",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000",
    steps: [
      { instruction: "Insert filter and rinse.", duration: 10 },
      { instruction: "Add 17g fine-medium coffee.", duration: 10 },
      { instruction: "Pour 250g hot water.", duration: 30 },
      { instruction: "Stir for 10 seconds.", duration: 10 },
      { instruction: "Wait.", duration: 60 },
      { instruction: "Press slowly into your mug.", duration: 30 },
    ],
  },
];
