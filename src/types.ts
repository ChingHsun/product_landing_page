export type ProductType =
  | {
      type: PCEnum.ASSEMBLE | PCEnum.BUSINESS;
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
  | {
      type: PCEnum.PREBUILT;
      id: string;
      title: string;
      imageUrl: string;
      basePrice: number;
      currency: string;
      promotion?: Promotion;
      description?: string;
      link: string;
      specifications: Specifications;
    };

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

export interface Specifications {
  processor: string;
  videoCard: string;
  memory: string;
  storage?: string;
}

export enum PCEnum {
  ASSEMBLE = "ASSEMBLE",
  BUSINESS = "BUSINESS",
  PREBUILT = "PREBUILT",
}
