import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { updateProductById } from 'entities/Product/model/services/updateProductById/updateProductById';
import { deleteProductById } from 'entities/Product/model/services/deleteProductById/deleteProductById';
import { addNewProduct } from 'features/addNewProduct/model/services/addNewProduct/addNewProduct';
import { NewProduct } from 'features/addNewProduct';
import { ProductDetailsSchema } from '../types/productDetailsSchema';
import { fetchProductsByUserId } from '../services/fetchProductsByUserId/fetchProductsByUserId';
import { Product } from '../types/product';

const initialState: ProductDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    form: undefined,
    productForm: undefined,
    productFilter: undefined,
};

export const productDetailsSlice = createSlice({
    name: 'productDetails',
    initialState,
    reducers: {
        fillEditModal: (
            state,
            action: PayloadAction<number>,
        ) => {
            const productId = action.payload;
            if (state.data) {
                state.productForm = state.data.find((product) => product.id === productId);
            }
        },
        updateProductById: (
            state,
            action: PayloadAction<{ productId: number,
                updatedData: Partial<Product>}>,
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
        deleteProductById: (
            state,
            action: PayloadAction<number>,
        ) => {
            if (state.data) {
                const productIdToDelete = action.payload;
                state.data = state.data.filter((product) => product.id !== productIdToDelete);
            }
        },
        addNewProduct: (state, action: PayloadAction<Product>) => {
            if (state.data) {
                const newProduct = action.payload;
                state.data.push(newProduct);
            }
        },
        editProduct: (
            state,
            action: PayloadAction<{
                updatedData: Partial<Product> }>,
        ) => {
            const { updatedData } = action.payload;
            if (state.productForm) {
                state.productForm = {
                    ...state.productForm,
                    ...updatedData,
                };
            }
        },
        filterDisplayForm: (
            state,
            action: PayloadAction<Partial<Product>>,
        ) => {
            const updatedData = action.payload;
            state.form = state.data;
            state.productFilter = {
                ...state.productFilter,
                ...updatedData,
            };
            if (state.productFilter.name && state.form) {
                // eslint-disable-next-line max-len
                state.form = state.form.filter((product) => (product.name.toLowerCase().includes((state.productFilter?.name || '').toLowerCase())));
            }
            if (state.productFilter.categoryId && state.form) {
                // eslint-disable-next-line max-len
                state.form = state.form.filter((product) => (product.categoryId === state.productFilter?.categoryId));
            }
            // if (updatedData.storageLocationId !== 0 && state.form) {
            //     // eslint-disable-next-line max-len
            //     state.form = state.form.filter((product) => (product.storageLocationId === updatedData.storageLocationId));
            // }
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
                state.form = state.data;
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
                if (state.data && state.form) {
                    // eslint-disable-next-line max-len
                    const productIndex = state.data.findIndex((product) => product.id === updatedProduct.id);
                    if (productIndex !== -1) {
                        // eslint-disable-next-line max-len
                        state.data[productIndex] = { ...state.data[productIndex], ...updatedProduct };
                    }
                    // eslint-disable-next-line max-len
                    const formProductIndex = state.form.findIndex((product) => product.id === updatedProduct.id);
                    if (formProductIndex !== -1) {
                        // eslint-disable-next-line max-len
                        state.form[formProductIndex] = { ...state.form[formProductIndex], ...updatedProduct };
                    }
                }
            })
            .addCase(updateProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteProductById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(deleteProductById.fulfilled, (
                state,
                action: PayloadAction<number>,
            ) => {
                const deletedProductId = action.payload;
                state.isLoading = false;
                if (state.data) {
                    state.data = state.data.filter((product) => product.id !== deletedProductId);
                }
                state.form = state.data;
            })
            .addCase(deleteProductById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addNewProduct.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(addNewProduct.fulfilled, (
                state,
                action: PayloadAction<Product>,
            ) => {
                const newProduct = action.payload;
                state.isLoading = false;
                if (state.data) {
                    state.data.push(newProduct);
                }
                state.form = state.data;
            })
            .addCase(addNewProduct.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: productDetailsActions } = productDetailsSlice;
export const { reducer: productDetailsReducer } = productDetailsSlice;
