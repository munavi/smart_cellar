import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { FilterBarName } from 'features/filterProduct';
import { Category, CategorySelect } from 'entities/Category';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { productDetailsActions } from 'entities/Product/model/slice/productDetailsSlice';
import { StorageLocationSelect } from 'entities/StorageLocation';
import { getCategories } from 'entities/Category/model/selectors/getCategories/getCategories';
import { useSelector } from 'react-redux';
import {
    getStorageLocations,
} from 'entities/StorageLocation/model/selectors/getStorageLocations/getStorageLocations';
import cls from './FilterBar.module.scss';

interface FilterBarProps {
    className?: string,
    onFilterChangeName: (value: string) => void,
    categories: Category[],

}

export const FilterBar = memo((props: FilterBarProps) => {
    const { t } = useTranslation();
    const { className, onFilterChangeName, categories } = props;
    const dispatch = useAppDispatch();
    // const categories = useSelector(getCategories);
    const storageLocations = useSelector(getStorageLocations);

    const onChangeCategory = useCallback((categoryId: number) => {
        dispatch(productDetailsActions.filterDisplayForm({ categoryId }));
    }, [dispatch]);

    const onChangeStorageLocation = useCallback((storageLocationId: number) => {
        dispatch(productDetailsActions.filterDisplayForm({ storageLocationId }));
    }, [dispatch]);

    return (
        <div className={classNames(cls.FilterBar, {}, [className])}>
            <FilterBarName onFilterChange={onFilterChangeName} />
            <CategorySelect
                categories={categories}
                zeroElement
                onChange={onChangeCategory}
            />
            <StorageLocationSelect
                storageLocations={storageLocations || []}
                zeroElement
                onChange={onChangeStorageLocation}
            />
        </div>
    );
});
