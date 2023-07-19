import { StateSchema } from 'app/providers/StoreProvider';

export const getAddNewProductData = (state: StateSchema) => state.product?.data;
export const getAddNewProductError = (state: StateSchema) => state.product?.error;
