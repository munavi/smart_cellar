import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import {
    updateProductById,
} from
    'entities/Product/model/services/updateProductById/updateProductById';
import { ProductDetailsSchema } from '../types/productDetailsSchema';
import { fetchProductsByUserId } from '../services/fetchProductsByUserId/fetchProductsByUserId';
import { Product } from '../types/product';

const initialState: ProductDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
        updateProductById: (
            state,
            action: PayloadAction<{ productId: number,
                updatedData: Partial<Product> }>,
        ) => {
            const { productId, updatedData } = action.payload;
            if (state.data) {
                const productIndex = state.data.findIndex((product) => product.id === productId);
                if (productIndex !== -1) {
                    state.data[productIndex] = {
                        ...state.data[productIndex],
                        ...updatedData,
                    };
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByUserId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProductsByUserId.fulfilled, (
                state,
                action: PayloadAction<Product[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProductsByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProductById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProductById.fulfilled, (
                state,
                action: PayloadAction<Product>,
            ) => {
                state.isLoading = false;
                const updatedProduct = action.payload;
                if (state.data) {
                    // eslint-disable-next-line max-len
                    const productIndex = state.data.findIndex((product) => product.id === updatedProduct.id);
                    if (productIndex !== -1) {
                        // eslint-disable-next-line max-len
                        state.data[productIndex] = { ...state.data[productIndex], ...updatedProduct };
                    }
                }
            })
            .addCase(updateProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: productDetailsActions } = productDetailsSlice;
export const { reducer: productDetailsReducer } = productDetailsSlice;
