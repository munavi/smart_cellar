import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { ProductDataStat } from 'entities/ProductStat/model/types/productStat';

export const fetchProductStat = createAsyncThunk<
    ProductDataStat,
    void,
    ThunkConfig<string>
    >(
        'productStat/fetchProductStat',
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
                const response = await
                extra.api.get<ProductDataStat>(`api/product/count/${userId}`);

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
