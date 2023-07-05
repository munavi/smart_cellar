import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Item } from '../../types/item';

export const fetchItemById = createAsyncThunk<
    Item,
    string,
    ThunkConfig<string>
    >(
        'itemDetails/fetchItemById',
        async (itemId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<Item>(`/items/${itemId}`);

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
