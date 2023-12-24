export interface IProduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  productTypeId: number;
  productBrandId: number;
  productType: string;
  productBrand: string;
  description: string;
  isActive: boolean;
  summary: string;
}
