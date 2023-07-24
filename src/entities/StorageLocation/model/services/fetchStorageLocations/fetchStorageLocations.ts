import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { StorageLocation } from 'entities/StorageLocation';

export const fetchStorageLocations = createAsyncThunk<
    StorageLocation[],
    void,
    ThunkConfig<string>
    >(
        'storageLocations/fetchStorageLocations',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<StorageLocation[]>('/api/storageLocation');

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
