import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Category } from 'entities/Category';

export const fetchCategories = createAsyncThunk<
    Category[],
    void,
    ThunkConfig<string>
    >(
        'categories/fetchCategories',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Category[]>('/api/category');

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
