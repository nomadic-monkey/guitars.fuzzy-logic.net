export type GuitarStatus = "available" | "reserved" | "sold" | "coming-soon";

export type GuitarSpecification = {
  label: string;
  value: string;
};

export type GuitarPrice = {
  amount: number;
  currency: "GBP" | "USD" | "EUR";
};

export type Guitar = {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;

  price: GuitarPrice;
  status: GuitarStatus;

  img: string;
  gallery: string[];

  overview: string;
  specification: GuitarSpecification[];

  condition?: string;
  playingCondition?: string;
  notes?: string;
};
