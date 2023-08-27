export interface ProductStat {
    id: number;
    name: string;
    countProducts: number;
}

export interface ProductDataStat {
    countAllCategories:number;
    countAllStorageLocations: number;
    countAllProducts: number;
    dataByCategory?: ProductStat[];
    dataByLocation?: ProductStat[];
}
