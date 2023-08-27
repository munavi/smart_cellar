import { StateSchema } from 'app/providers/StoreProvider';

export const getDataByCategory = (state:StateSchema) => state.productStat?.data?.dataByCategory;
export const getDataByStorageLocation = (state:StateSchema) => state.productStat?.data?.dataByLocation;
export const getCountCategories = (state:StateSchema) => state.productStat?.data?.countAllCategories;
export const getCountStorageLocations = (state:StateSchema) => state.productStat?.data?.countAllStorageLocations;
export const getCountProducts = (state:StateSchema) => state.productStat?.data?.countAllProducts;
