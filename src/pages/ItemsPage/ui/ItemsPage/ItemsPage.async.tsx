import { lazy } from 'react';

export const ItemsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ItemsPage')), 1500);
}));
