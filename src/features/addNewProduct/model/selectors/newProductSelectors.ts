import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewProductData = (state: StateSchema) => state.newProduct?.data;
export const getAddNewProductError = (state: StateSchema) => state.newProduct?.error;
