import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { AddNewProduct } from 'features/addNewProduct';
import { useSelector } from 'react-redux';
import { getDisplayProducts } from 'entities/Product/model/selectors/productDetails';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchProductsByUserId,
} from 'entities/Product/model/services/fetchProductsByUserId/fetchProductsByUserId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    productDetailsActions, productDetailsReducer,
} from 'entities/Product/model/slice/productDetailsSlice';
import { ProductListItem } from 'entities/Product/ui/ProductListItem/ProductListItem';
import { addNewProductReducer } from 'features/addNewProduct/model/slices/newProductSlice';
import { categoriesReducer } from 'entities/Category/model/slice/categoriesSlice';
import {
    storageLocationsReducer,
} from 'entities/StorageLocation/model/slice/storageLocationsSlice';
import { FilterBar } from 'features/filterProduct';
import { fetchCategories } from 'entities/Category/model/services/fetchCategories/fetchCategories';
import { getCategories } from 'entities/Category/model/selectors/getCategories/getCategories';
import {
    fetchStorageLocations,
} from 'entities/StorageLocation/model/services/fetchStorageLocations/fetchStorageLocations';
import {
    getStorageLocations,
} from 'entities/StorageLocation/model/selectors/getStorageLocations/getStorageLocations';
import cls from './ProductListPage.module.scss';

interface ItemsPageProps {
    className?: string,
}

const reducers: ReducersList = {
    categories: categoriesReducer,
    storageLocations: storageLocationsReducer,
    productDetails: productDetailsReducer,
    newProduct: addNewProductReducer,
};

const ProductListPage = ({ className }: ItemsPageProps) => {
    const { t } = useTranslation('productlist');
    const categories = useSelector(getCategories);
    const storageLocations = useSelector(getStorageLocations);
    const products = useSelector(getDisplayProducts);

    const dispatch = useAppDispatch();
    const [filteredValue, setFilteredValue] = useState<string>('');
    const [isModal, setIsModal] = useState(false);
    const onShowModal = useCallback(() => {
        setIsModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);

    useInitialEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchStorageLocations());
        dispatch(fetchProductsByUserId());
    });

    const onFilterByName = useCallback((name?: string) => {
        dispatch(productDetailsActions.filterDisplayForm({ name }));
    }, [dispatch]);

    const handleFilterChange = (name: string) => {
        setFilteredValue(name);
        onFilterByName(name);
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ItemsPage, {}, [className])}>
                <FilterBar
                    onFilterChangeName={handleFilterChange}
                    categories={categories || []}
                    storageLocations={storageLocations || []}
                />
                <AddNewProduct
                    onShowModal={onShowModal}
                    isModal={isModal}
                    onCloseModal={onCloseModal}
                    categories={categories || []}
                    storageLocations={storageLocations || []}
                />
                {
                    products && products.length > 0 && (
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            {products.map((product) => (
                                <ProductListItem
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </Stack>
                    )
                }
            </div>
        </DynamicModuleLoader>
    );
};

export default ProductListPage;
