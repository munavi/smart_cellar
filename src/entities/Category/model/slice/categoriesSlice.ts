import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { CategorySchema } from '../types/CategorySchema';
import { fetchCategories } from '../services/fetchCategories/fetchCategories';
import { Category } from '../types/category';

const initialState: CategorySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCategories.fulfilled, (
                state,
                action: PayloadAction<Category[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: categoriesActions } = categoriesSlice;
export const { reducer: categoriesReducer } = categoriesSlice;
