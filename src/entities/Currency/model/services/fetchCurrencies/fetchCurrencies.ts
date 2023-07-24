import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';

export const fetchCurrencies = createAsyncThunk<
    Country[],
    void,
    ThunkConfig<string>
    >(
        'currencies/fetchCurrencies',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Country[]>('/api/currency');

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
