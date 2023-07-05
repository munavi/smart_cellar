import { Item } from './item';

export interface ItemDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Item;
}
