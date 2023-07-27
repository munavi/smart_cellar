import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { FilterBarName } from 'features/filterProduct';
import { CategorySelect } from 'entities/Category';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { productDetailsActions } from 'entities/Product/model/slice/productDetailsSlice';
import { StorageLocationSelect } from 'entities/StorageLocation';
import cls from './FilterBar.module.scss';

interface FilterBarProps {
    className?: string,
    onFilterChangeName: (value: string) => void,

}

export const FilterBar = memo((props: FilterBarProps) => {
    const { t } = useTranslation();
    const { className, onFilterChangeName } = props;
    const dispatch = useAppDispatch();

    const onChangeCategory = useCallback((categoryId: number) => {
        dispatch(productDetailsActions.filterDisplayForm({ categoryId }));
    }, [dispatch]);

    const onChangeStorageLocation = useCallback((storageLocationId: number) => {
        dispatch(productDetailsActions.filterDisplayForm({ storageLocationId }));
    }, [dispatch]);

    return (
        <div className={classNames(cls.FilterBar, {}, [className])}>
            <FilterBarName onFilterChange={onFilterChangeName} />
            <CategorySelect zeroElement onChange={onChangeCategory} />
            <StorageLocationSelect value="" zeroElement onChange={onChangeStorageLocation} />
        </div>
    );
});
