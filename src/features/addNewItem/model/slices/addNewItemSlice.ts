import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewItemSchema } from '../types/addNewItem';

const initialState: AddNewItemSchema = {
    text: '',
};

export const addNewItemSlice = createSlice({
    name: 'addNewItem',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
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
export const { actions: addNewItemActions } = addNewItemSlice;
export const { reducer: addNewItemReducer } = addNewItemSlice;
