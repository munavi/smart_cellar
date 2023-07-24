import { StateSchema } from 'app/providers/StoreProvider';

export const getStorageLocations = (state: StateSchema) => state.storageLocations?.data;
