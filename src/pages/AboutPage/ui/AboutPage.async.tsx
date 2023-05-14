import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // for future test with chunks download
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
