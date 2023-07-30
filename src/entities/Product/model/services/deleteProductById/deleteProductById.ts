import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const deleteProductById = createAsyncThunk<
    number,
    number,
    ThunkConfig<string>
    >(
        'productDetails/deleteProductById',
        async (id, thunkApi) => {
            const {
                extra, rejectWithValue,
            } = thunkApi;

            try {
                const response = await extra.api.delete<number>(`api/product/${id}`);

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
