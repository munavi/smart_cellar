import { Product } from './product';

export interface ProductDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Product[];
    productForm?: Partial<Product>;
    productData?: Partial<Product>;
}
