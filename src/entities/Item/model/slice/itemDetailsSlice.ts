import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { ItemDetailsSchema } from '../types/itemDetailsSchema';
import { fetchItemById } from '../services/fetchItemById/fetchItemById';
import { Item } from '../types/item';

const initialState: ItemDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const itemDetailsSlice = createSlice({
    name: 'itemDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchItemById.fulfilled, (
                state,
                action: PayloadAction<Item>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchItemById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: itemDetailsActions } = itemDetailsSlice;
export const { reducer: itemDetailsReducer } = itemDetailsSlice;
