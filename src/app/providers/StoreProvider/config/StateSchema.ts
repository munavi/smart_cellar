import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByEmail';
import {
    AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { ProductDetailsSchema } from 'entities/Product';
import { NewProductSchema } from 'features/addNewProduct';
import { CountrySchema } from 'entities/Country/model/types/CountrySchema';
import { CurrencySchema } from 'entities/Currency/model/types/CurrencySchema';
import { CategorySchema } from 'entities/Category/model/types/CategorySchema';
import { StorageLocationSchema } from 'entities/StorageLocation/model/types/StorageLocationSchema';
import { ProductStatSchema } from 'entities/ProductStat';

export interface StateSchema {
    user: UserSchema;

    // Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    productDetails?: ProductDetailsSchema;
    newProduct?: NewProductSchema;
    countries?: CountrySchema;
    currencies?: CurrencySchema;
    categories?: CategorySchema;
    storageLocations?: StorageLocationSchema;
    productStat?: ProductStatSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
