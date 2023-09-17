import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'shared/ui/Select/CustomSelect';
import { memo, useCallback, useMemo } from 'react';
import { Category } from 'entities/Category';

interface CategorySelectProps {
    className?: string;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    zeroElement?: boolean;
    categories: Category[];
}

export const CategorySelect = memo(({
    className, value, onChange, readonly, zeroElement,
    categories,
}: CategorySelectProps) => {
    const { t } = useTranslation('productlist');

    const options = useMemo(() => (categories || []).map((category) => ({
        value: category.id,
        content: category.name,
    })), [categories]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(Number(value));
    }, [onChange]);

    return (
        <CustomSelect
            className={classNames('', {}, [className])}
            label={t('Choose a category')}
            options={options}
            value={value?.toString()}
            onChange={onChangeHandler}
            readonly={readonly}
            zeroElement={zeroElement}
        />
    );
});
