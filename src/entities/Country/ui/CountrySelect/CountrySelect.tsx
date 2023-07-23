import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCountries } from 'entities/Country/model/selectors/getCountries/getCountries';
import { getSelectedCountry } from
    'entities/Country/model/selectors/getSelectedCountry/getSelectedCountry';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCountries } from 'entities/Country/model/services/fetchCountries/fetchCountries';
import { DynamicModuleLoader, ReducersList } from
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { countriesReducer } from 'entities/Country/model/slice/countriesSlice';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
}

const reducers: ReducersList = {
    country: countriesReducer,
};

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const countries = useSelector(getCountries);
    const selectedCountryId = useSelector(getSelectedCountry);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCountries());
    });
    const options = useMemo(() => (countries || []).map((country) => ({
        value: country.id,
        content: country.name,
    })), [countries]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(Number(value));
    }, [onChange]);

    // const onChangeHandler = (event) => {
    //     const selectedCountryId = event.target.value;
    //     dispatch(selectCountry(selectedCountryId)); // Сохраняем ID выбранной страны
    // };

    // const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    //     const selectedValue = parseInt(e.target.value, 10);
    //     dispatch(selectedCountryId(selectedValue));
    // };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Select
                className={classNames('', {}, [className])}
                label={t('Choose a country')}
                options={options}
                value={value?.toString()}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
});
