import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { StorageLocationSchema } from '../types/StorageLocationSchema';
import { fetchStorageLocations } from '../services/fetchStorageLocations/fetchStorageLocations';
import { StorageLocation } from '../types/storageLocation';

const initialState: StorageLocationSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const storageLocationsSlice = createSlice({
    name: 'storageLocations',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStorageLocations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchStorageLocations.fulfilled, (
                state,
                action: PayloadAction<StorageLocation[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStorageLocations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: storageLocationsActions } = storageLocationsSlice;
export const { reducer: storageLocationsReducer } = storageLocationsSlice;
