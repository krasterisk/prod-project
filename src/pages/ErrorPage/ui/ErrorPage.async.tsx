import {lazy} from "react";

export const ErrorPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ErrorPage')), 1500)
}));
