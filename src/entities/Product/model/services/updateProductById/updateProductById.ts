import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProductDetailsData } from 'entities/Product/model/selectors/productDetails';
import { Product } from '../../types/product';

export const updateProductById = createAsyncThunk<
    Product,
    number,
    ThunkConfig<string>
    >(
        'productDetails/updateProductById',
        async (id, thunkApi) => {
            const {
                extra, rejectWithValue, getState,
            } = thunkApi;

            const data = getProductDetailsData(getState());
            const product = data?.find((product) => product.id === id);

            try {
                const response = await extra.api.put<Product>(`api/product/${id}`, product);

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
