import { Category } from 'entities/Category';
import { StorageLocation } from 'entities/StorageLocation';

export interface AddNewItemSchema {
    // id: string,
    // itemName: string,
    // number: number,
    // category: Category,
    // storageLocation: StorageLocation,
    // date: string,
    text?: string,
    error?: string,
}
