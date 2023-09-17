import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    countryId: undefined,
    lastname: 'mustermann',
    first: 'max',
    currency: 'USD',
};

describe('validateProfileData.test', () => {
    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });

        expect(result).toContain(ValidateProfileError.INCORRECT_USER_DATA);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...data, countryId: undefined });

        expect(result).toContain(ValidateProfileError.INCORRECT_COUNTRY);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});

        expect(result).toContain(ValidateProfileError.INCORRECT_USER_DATA);
        expect(result).toContain(ValidateProfileError.INCORRECT_COUNTRY);
    });
});
