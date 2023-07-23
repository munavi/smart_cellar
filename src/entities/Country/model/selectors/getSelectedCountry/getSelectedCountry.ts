import { StateSchema } from 'app/providers/StoreProvider';

export const getSelectedCountry = (state: StateSchema) => state.countries?.selectedCountryId;
