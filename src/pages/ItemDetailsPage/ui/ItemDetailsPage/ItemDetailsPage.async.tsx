import { lazy } from 'react';

export const ItemDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ItemDetailsPage')), 1500);
}));
