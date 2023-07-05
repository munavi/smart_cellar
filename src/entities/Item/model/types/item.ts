import { Category } from 'entities/Category/model/types/category';
import { StorageLocation } from 'entities/StorageLocation/model/types/storageLocation';

export interface Item {
      id: string;
      itemName: string;
      number: number;
      category: Category;
      storageLocation: StorageLocation;
      date: string;
  }
