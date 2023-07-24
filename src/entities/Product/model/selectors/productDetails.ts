import { StateSchema } from 'app/providers/StoreProvider';

export const getProductDetailsData = (state:StateSchema) => state.productDetails?.data;
export const getProductDDetailsIsLoading = (state:StateSchema) => state.productDetails?.isLoading;
export const getProductDDetailsError = (state:StateSchema) => state.productDetails?.error;
