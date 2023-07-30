import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productDetailsReducer } from 'entities/Product/model/slice/productDetailsSlice';
import { countriesReducer } from 'entities/Country/model/slice/countriesSlice';
import { currenciesReducer } from 'entities/Currency/model/slice/currenciesSlice';
import { categoriesReducer } from 'entities/Category/model/slice/categoriesSlice';
import {
    storageLocationsReducer,
} from 'entities/StorageLocation/model/slice/storageLocationsSlice';
import { addNewProductReducer } from 'features/addNewProduct/model/slices/newProductSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    countries: countriesReducer,
    currencies: currenciesReducer,
    productDetails: productDetailsReducer,
    newProduct: addNewProductReducer,
    categories: categoriesReducer,
    storageLocations: storageLocationsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
