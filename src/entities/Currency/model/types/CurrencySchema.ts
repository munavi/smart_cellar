import { Currency } from './currency';

export interface CurrencySchema {
    isLoading: boolean;
    error?: string;
    data?: Currency[];
}
