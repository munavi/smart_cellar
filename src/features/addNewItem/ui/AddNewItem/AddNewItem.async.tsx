import { FC, lazy } from 'react';
import { AddNewItemProps } from './AddNewItem';

export const AddCommentFormAsync = lazy<FC<AddNewItemProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AddNewItem')), 1500);
}));
