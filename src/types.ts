export interface ProductType {
  id: string;
  title: string;
  imageUrl: string;
  basePrice: number;
  currency: string;
  promotion?: Promotion;
  description: string;
  ratings: Rating;
  link: string;
}

export interface Promotion {
  endDate: string;
  description: string;
  price: number;
}

export interface Rating {
  compositionOptions: number;
  processorGraphicsCapabilities: number;
  priceQuality: number;
}
