import { Category } from 'entities/Category';
import { StorageLocation } from 'entities/StorageLocation';


export interface Product{
    id?: string;
    productName?: string;
    number?: number;
    category?: Category;
    storageLocation?: StorageLocation;
    date?: string;
}
export interface ProductSchema {
    data?: Product;
    form?: Product;
    error?: string;
    isLoading: boolean;
    // error?: string,
}
