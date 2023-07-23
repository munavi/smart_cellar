import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            const userId = JSON.parse(user || '').id;

            try {
                const response = await
                extra.api.put<Profile>(
                    `api/profile/${userId}`,
                    formData,
                );

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
