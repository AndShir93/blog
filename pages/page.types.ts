export interface IBrand {
  id: number;
  brand: string;
}

export interface IModel {
  model: string;
  brandId: number;
  price: string;
  image: string;
}
