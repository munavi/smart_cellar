import { NewProduct } from 'features/addNewProduct/model/types/newProduct';

export interface NewProductSchema {
    data?: NewProduct;
    error?: string;
    isLoading: boolean;

}
