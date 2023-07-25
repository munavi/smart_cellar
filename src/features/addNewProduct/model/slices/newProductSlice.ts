import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewProduct } from 'features/addNewProduct';
import { NewProductSchema } from '../types/NewProductSchema';

const initData: NewProduct = {
    name: undefined,
    quantity: undefined,
    date: undefined,
    categoryId: 1,
    storageLocationId: 1,
};

const initialState: NewProductSchema = {
    isLoading: false,
    error: undefined,
    data: initData,
};

export const newProductSlice = createSlice({
    name: 'newProduct',
    initialState,
    reducers: {
        cancelEdit: (state) => {
            state.data = initData;
        },
        updateNewProduct: (state, action: PayloadAction<Partial<NewProduct>>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
    },

});

// Action creators are generated for each case reducer function
export const { actions: addNewProductActions } = newProductSlice;
export const { reducer: addNewProductReducer } = newProductSlice;
