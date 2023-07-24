import { Category } from './category';

export interface CategorySchema {
    isLoading: boolean;
    error?: string;
    data?: Category[];
}
