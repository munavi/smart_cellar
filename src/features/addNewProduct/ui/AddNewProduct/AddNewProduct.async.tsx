import { FC, lazy } from 'react';
import { AddNewProductProps } from './AddNewProduct';
export const AddCommentFormAsync = lazy<FC<AddNewProductProps>>(() => import('./AddNewProduct'));
