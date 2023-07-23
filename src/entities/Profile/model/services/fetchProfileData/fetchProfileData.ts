import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            const userId = JSON.parse(user || '').id;
            try {
                const response = await
                extra.api.get<Profile>(`api/profile/${userId}`);

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
