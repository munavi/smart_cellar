import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Product } from 'entities/Product';
import { getAddNewProductData } from 'features/addNewProduct/model/selectors/newProductSelectors';

export const addNewProduct = createAsyncThunk<
    Product,
    void,
    ThunkConfig<string>
    >(
        'newProduct/addNewProduct',
        async (_, thunkApi) => {
            const {
                extra, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());
            const newProductData = getAddNewProductData(getState());

            if (!userData || !newProductData) {
                return rejectWithValue('no data');
            }
            const dataWithUserId = {
                ...newProductData,
                userId: userData.id,
            };

            try {
                const response = await extra.api.post<Product>(
                    'api/product/',
                    dataWithUserId,
                );

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
