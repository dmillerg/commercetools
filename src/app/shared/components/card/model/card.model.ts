export interface Card {
  card?: {
    name: string;
    img: string;
    description: string;
    price: number;
    rating: number;
    votes: number;
  };
  loading?: boolean;
}
