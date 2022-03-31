export interface Product {
  [index: string] : string | number | Array<string>;
  id: string;
  name: string;
  price: number;
  downloadSpeed: string;
  uploadSpeed: string;
  benefits: Array<string>;
}
