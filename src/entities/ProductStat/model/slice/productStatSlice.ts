import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    fetchProductStat,
} from 'entities/ProductStat/model/services/fetchProductStat/fetchProductStat';
import { ProductDataStat } from 'entities/ProductStat/model/types/productStat';
import { ProductStatSchema } from '../types/ProductStatSchema';

const initialState: ProductStatSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const productStatSlice = createSlice({
    name: 'productStat',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductStat.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProductStat.fulfilled, (
                state,
                action: PayloadAction<ProductDataStat>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProductStat.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: productStatActions } = productStatSlice;
export const { reducer: productStatReducer } = productStatSlice;
