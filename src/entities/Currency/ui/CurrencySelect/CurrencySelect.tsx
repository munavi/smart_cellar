import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCurrencies } from 'entities/Currency/model/selectors/getCurrencies/getCurrencies';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCurrencies } from 'entities/Currency/model/services/fetchCurrencies/fetchCurrencies';
import { DynamicModuleLoader, ReducersList } from
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { currenciesReducer } from 'entities/Currency/model/slice/currenciesSlice';

interface CurrencySelectProps {
    className?: string;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
}

const reducers: ReducersList = {
    currencies: currenciesReducer,
};

export const CurrencySelect = memo(({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const currencies = useSelector(getCurrencies);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCurrencies());
    });
    const options = useMemo(() => (currencies || []).map((currency) => ({
        value: currency.id,
        content: currency.name,
    })), [currencies]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(Number(value));
    }, [onChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Select
                className={classNames('', {}, [className])}
                label={t('Choose a currency')}
                options={options}
                value={value?.toString()}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
});
