import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './FilterBarCategory.module.scss';

interface FilterBarCategoryProps {
    className?: string,

}

export const FilterBarCategory = memo((props: FilterBarCategoryProps) => {
    const { t } = useTranslation();
    const { className } = props;

    return (
        <div className={classNames(cls.FilterBarCategory, {}, [className])} />
    );
});
