import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Button, ListItem, ListItemText, Stack, TextField,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Counter } from 'entities/Counter';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { AddNewProduct } from 'features/addNewProduct';
import { CategorySelect } from 'entities/Category';
import { StorageLocationSelect } from 'entities/StorageLocation';
import { useSelector } from 'react-redux';
import { getProductDetailsData } from 'entities/Product/model/selectors/productDetails';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchProductsByUserId,
} from 'entities/Product/model/services/fetchProductsByUserId/fetchProductsByUserId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productDetailsReducer } from 'entities/Product/model/slice/productDetailsSlice';
import { ProductListItem } from 'entities/Product/ui/ProductListItem/ProductListItem';
import { deleteProductById } from 'entities/Product/model/services/deleteProductById/deleteProductById';
import cls from './ProductListPage.module.scss';

interface ItemsPageProps {
    className?: string,
}

const reducers: ReducersList = {
    productDetails: productDetailsReducer,
};

const ProductListPage = ({ className }: ItemsPageProps) => {
    const { t } = useTranslation();
    const products = useSelector(getProductDetailsData);
    const dispatch = useAppDispatch();
    const [isModal, setIsModal] = useState(false);
    const onShowModal = useCallback(() => {
        setIsModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);

    useInitialEffect(() => {
        dispatch(fetchProductsByUserId());
    });

    const handleDeleteProduct = useCallback((productId:number) => {
        dispatch(deleteProductById(productId));
    }, [dispatch]);

    // Функция для редактирования продукта
    const handleEditProduct = useCallback((productId) => {
        // Ваша логика редактирования продукта по productId
        // Например, можно открыть модальное окно для редактирования продукта
        // или перенаправить пользователя на страницу редактирования продукта
    }, []);

    // Array item should be have a such structure
    // {name: string, count: number, location: Enum value as string, date: string}
    // Product category shoul be use as a filter option

    return (

        <div className={classNames(cls.ItemsPage, {}, [className])}>
            {t('Itemspage')}
            <AddNewProduct onShowModal={onShowModal} />
            <Modal
                isOpen={isModal}
                onClose={onCloseModal}
            >
                {' '}
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Item name')}
                    align={TextAlign.CENTER}
                />
                <TextField />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('change a date')}
                    align={TextAlign.CENTER}
                />
                <DatePicker />
                <StorageLocationSelect />
                <CategorySelect />

            </Modal>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
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
                                    onDelete={handleDeleteProduct} // Замените handleDeleteProduct на вашу функцию удаления продукта
                                    onEdit={handleEditProduct} // Замените handleEditProduct на вашу функцию редактирования продукта
                                />
                            ))}
                        </Stack>
                    )
                }
            </DynamicModuleLoader>
        </div>
    );
};

export default ProductListPage;
