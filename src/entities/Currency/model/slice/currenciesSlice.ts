import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { CurrencySchema } from '../types/CurrencySchema';
import { fetchCurrencies } from '../services/fetchCurrencies/fetchCurrencies';
import { Currency } from '../types/currency';

const initialState: CurrencySchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrencies.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCurrencies.fulfilled, (
                state,
                action: PayloadAction<Currency[]>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchCurrencies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: currenciesActions } = currenciesSlice;
export const { reducer: currenciesReducer } = currenciesSlice;
