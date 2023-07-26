import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCategories } from 'entities/Category/model/selectors/getCategories/getCategories';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCategories } from 'entities/Category/model/services/fetchCategories/fetchCategories';
import { DynamicModuleLoader, ReducersList } from
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { categoriesReducer } from 'entities/Category/model/slice/categoriesSlice';

interface CategorySelectProps {
    className?: string;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
}

const reducers: ReducersList = {
    categories: categoriesReducer,
};

export const CategorySelect = memo(({
    className, value, onChange, readonly,
}: CategorySelectProps) => {
    const { t } = useTranslation();

    const categories = useSelector(getCategories);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCategories());
    });
    const options = useMemo(() => (categories || []).map((category) => ({
        value: category.id,
        content: category.name,
    })), [categories]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(Number(value));
    }, [onChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Select
                className={classNames('', {}, [className])}
                label={t('Choose a category')}
                options={options}
                value={value?.toString()}
                onChange={onChangeHandler}
                readonly={readonly}
            />
        </DynamicModuleLoader>
    );
});
