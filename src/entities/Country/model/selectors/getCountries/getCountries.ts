import { StateSchema } from 'app/providers/StoreProvider';

export const getCountries = (state: StateSchema) => state.countries?.data;
