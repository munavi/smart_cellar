import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FilterBarName } from 'features/filterProduct';
import cls from './FilterBar.module.scss';

interface FilterBarProps {
    className?: string,
    onFilterChangeName: (value: string) => void,

}

export const FilterBar = memo((props: FilterBarProps) => {
    const { t } = useTranslation();
    const { className, onFilterChangeName } = props;

    return (
        <div className={classNames(cls.FilterBar, {}, [className])}>
            <FilterBarName onFilterChange={onFilterChangeName} />
        </div>
    );
});
