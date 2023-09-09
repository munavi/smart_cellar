import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'shared/ui/Select/CustomSelect';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCountries } from 'entities/Country/model/selectors/getCountries/getCountries';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCountries } from 'entities/Country/model/services/fetchCountries/fetchCountries';
import { DynamicModuleLoader, ReducersList } from
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { countriesReducer } from 'entities/Country/model/slice/countriesSlice';

interface CountrySelectProps {
    className?: string;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
}

const reducers: ReducersList = {
    countries: countriesReducer,
};

export const CountrySelect = memo(({
    className, value, onChange, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation('profile');

    const countries = useSelector(getCountries);
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

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <CustomSelect
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
