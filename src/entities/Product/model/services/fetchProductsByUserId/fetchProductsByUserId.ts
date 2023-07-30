import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Product } from '../../types/product';

export const fetchProductsByUserId = createAsyncThunk<
    Product[],
    void,
    ThunkConfig<string>
    >(
        'productDetails/fetchProductsByUserId',
        async (_, thunkApi) => {
            const {
                extra, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());

            if (!userData) {
                return rejectWithValue('no data');
            }
            const userId = userData.id;

            try {
                const response = await extra.api.get<Product[]>(`api/product/${userId}`);

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
