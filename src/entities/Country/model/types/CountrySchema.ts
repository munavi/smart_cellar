import { Country } from './country';

export interface CountrySchema {
    isLoading: boolean;
    error?: string;
    data?: Country[];
}
