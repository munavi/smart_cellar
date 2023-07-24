import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrencies = (state: StateSchema) => state.currencies?.data;
