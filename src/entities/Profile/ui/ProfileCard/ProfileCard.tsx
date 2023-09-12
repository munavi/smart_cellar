import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { CurrencySelect } from 'entities/Currency';
import { CountrySelect } from 'entities/Country';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeFirstname?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeCurrency?: (currency: number) => void;
    onChangeCountry?: (country: number) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(
                cls.ProfileCard,
                { [cls.loading]: true },
                [className],
            )}
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try refreshing the page')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                <TextField
                    value={data?.firstname}
                    label={t('Your firstname')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    disabled={readonly}
                />
                <TextField
                    value={data?.lastname}
                    label={t('Your lastname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    disabled={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currencyId}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={cls.input}
                    value={data?.countryId}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
