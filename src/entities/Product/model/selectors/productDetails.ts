import { StateSchema } from 'app/providers/StoreProvider';

export const getItemDetailsData = (state:StateSchema) => state.productDetails?.data;
export const getItemDetailsIsLoading = (state:StateSchema) => state.productDetails?.isLoading;
export const getItemDetailsError = (state:StateSchema) => state.productDetails?.error;
