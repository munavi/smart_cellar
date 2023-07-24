export interface Product{
    id?: string;
    name?: string;
    counter?: number;
    date?: string;
    categoryId?: number;
    storageLocationId?: number;

}
export interface ProductSchema {
    data?: Product;
    form?: Product;
    error?: string;
    isLoading: boolean;
    // error?: string,
}
