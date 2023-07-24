import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { ProductDetailsSchema } from '../types/productDetailsSchema';
import { fetchProductById } from '../services/fetchProductById/fetchProductById';
import { Product } from '../types/product';

const initialState: ProductDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProductById.fulfilled, (
                state,
                action: PayloadAction<Product>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: productDetailsActions } = productDetailsSlice;
export const { reducer: productDetailsReducer } = productDetailsSlice;
