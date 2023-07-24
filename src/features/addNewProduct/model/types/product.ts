import { StorageLocation } from 'entities/StorageLocation';

export interface Product{
    id?: string;
    name?: string;
    counter?: number;
    date?: string;
    categoryId?: string;
    storageLocationId?: StorageLocation;

}
export interface ProductSchema {
    data?: Product;
    form?: Product;
    error?: string;
    isLoading: boolean;
    // error?: string,
}
