import React, { useCallback, useState } from 'react';
import {
    ListItem, ListItemText, Button,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Counter } from 'entities/Counter';
import { Product } from 'entities/Product';
import { useTranslation } from 'react-i18next';
import { IdConverter } from 'shared/ui/IdConverter/IdConverter';
import {
    deleteProductById,
} from 'entities/Product/model/services/deleteProductById/deleteProductById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { EditProductModal } from 'entities/Product/ui/ProductListItem/EditProductModal/EditProductModal';
import cls from './ProductListItem.module.scss';

interface ProductListItemProps{
        product: Product;

}

export const ProductListItem = ({ product }: ProductListItemProps) => {
    const { t } = useTranslation();
    const [isModal, setIsModal] = useState(false);
    const onShowModal = useCallback(() => {
        setIsModal(true);
    }, []);
    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);
    const dispatch = useAppDispatch();
    const handleDeleteProduct = useCallback((productId:number) => {
        dispatch(deleteProductById(productId));
    }, [dispatch]);
    const handleEditProduct = useCallback((productId) => {
        // Ваша логика редактирования продукта по productId
        // Например, можно открыть модальное окно для редактирования продукта
        // или перенаправить пользователя на страницу редактирования продукта
    }, []);

    return (
        <ListItem className={cls.container}>
            <EditProductModal
                isOpen={isModal}
                onClose={onCloseModal}
                product={product}
                productId={product.id}
                className={cls.item}
            />
            <Button
                size="small"
                variant="contained"
                onClick={onShowModal}
                className={cls.item}
            >
                <EditOutlinedIcon />
            </Button>
            <ListItemText className={cls.item}>
                {product.name}
            </ListItemText>
            <IdConverter
                value={product.categoryId}
                content="Category"
                className={cls.item}
            />
            <Counter
                quantity={product.quantity}
                productId={product.id}
                className={cls.item}
            />
            <IdConverter
                value={product.storageLocationId}
                content="StorageLocation"
                className={cls.item}
            />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <ListItemText className={cls.item}>
                {product.date}
            </ListItemText>
            <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => handleDeleteProduct(product.id)}
                className={cls.item}
            >
                {t('DELETE')}
            </Button>
        </ListItem>
    );
};
