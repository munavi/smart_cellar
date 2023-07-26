import { StateSchema } from 'app/providers/StoreProvider';

export const getProductDetailsData = (state:StateSchema) => state.productDetails?.data;
export const getProductDetailsForm = (state:StateSchema) => state.productDetails?.productForm;
export const getProductDetailsIsLoading = (state:StateSchema) => state.productDetails?.isLoading;
export const getProductDetailsError = (state:StateSchema) => state.productDetails?.error;
