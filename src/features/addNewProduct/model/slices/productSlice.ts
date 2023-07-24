import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductSchema } from '../types/product';

const initialState: ProductSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: addNewProductActions } = productSlice;
export const { reducer: addNewProductReducer } = productSlice;
