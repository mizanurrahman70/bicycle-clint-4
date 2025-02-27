export interface Review {
    id: number;
    customerName: string;
    rating: number;
    comment: string;
    date: string;
    avatarUrl?: string;
    productId?: number;
  }