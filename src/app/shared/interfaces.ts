export interface IProduct {
  id: number;
  type: string;
  purity: string;
  weight: string;
}

export interface ICustomer {
  name: string;
  email: string;
  phone: string;
  idproof: string;
  address: string;
  city: string;
  pincode: string;
}

export interface IPayment {
  paymentMethod: string;
  store: string;
}
