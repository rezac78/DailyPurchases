export interface Product {
    name: string;
    price: number; 
}
export interface ProductFormProps {
    addProduct: (product: Product) => void;
}
  