import { lazy } from 'react';

export const ProductListPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProductListPage')), 1500);
}));
