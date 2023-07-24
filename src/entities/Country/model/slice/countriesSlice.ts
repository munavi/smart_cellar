import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { CountrySchema } from '../types/CountrySchema';
import { fetchCountries } from '../services/fetchCountries/fetchCountries';
import { Country } from '../types/country';

const initialState: CountrySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCountries.fulfilled, (
                state,
                action: PayloadAction<Country[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: countriesActions } = countriesSlice;
export const { reducer: countriesReducer } = countriesSlice;
