import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

// It's possible to configuire with global env variable
const baseUrl = __IS_DEV__ ? __REACT_APP_API_URL__ : 'https://production.de';

export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
