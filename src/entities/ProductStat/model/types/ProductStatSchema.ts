import { ProductDataStat } from './productStat';

export interface ProductStatSchema {
    isLoading: boolean;
    error?: string;
    data?: ProductDataStat;

}
