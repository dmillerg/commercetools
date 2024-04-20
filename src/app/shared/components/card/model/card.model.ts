export interface Card {
  card?: {
    name: string;
    img: string;
    description: string;
    price: number;
    rating: number;
    votes: number;
    data?: any;
  };
  click: () => void;
  loading?: boolean;
}
