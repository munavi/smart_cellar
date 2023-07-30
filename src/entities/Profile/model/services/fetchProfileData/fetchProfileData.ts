import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/fetchProfileData',
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
