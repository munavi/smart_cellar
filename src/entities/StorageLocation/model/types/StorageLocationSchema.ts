import { StorageLocation } from './storageLocation';

export interface StorageLocationSchema {
    isLoading: boolean;
    error?: string;
    data?: StorageLocation[];
}
