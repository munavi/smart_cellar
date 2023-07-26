import React, { useCallback, useState } from 'react';
import { Button, ListItem, ListItemText } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Counter } from 'entities/Counter';
import { Product } from 'entities/Product';
import { useTranslation } from 'react-i18next';
import { IdConverter } from 'shared/ui/IdConverter/IdConverter';
import {
    deleteProductById,
} from 'entities/Product/model/services/deleteProductById/deleteProductById';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    EditProductModal,
} from 'entities/Product/ui/ProductListItem/EditProductModal/EditProductModal';
import { productDetailsActions } from 'entities/Product/model/slice/productDetailsSlice';
import cls from './ProductListItem.module.scss';

interface ProductListItemProps{
        product: Product;

}

export const ProductListItem = ({ product }: ProductListItemProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [isModal, setIsModal] = useState(false);
    const onShowModal = useCallback(() => {
        dispatch(productDetailsActions.fillEditModal(product.id));
        setIsModal(true);
    }, [dispatch, product.id]);
    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);

    const handleDeleteProduct = useCallback((productId:number) => {
        dispatch(deleteProductById(productId));
    }, [dispatch]);

    return (
        <ListItem className={cls.container}>
            <Button
                size="small"
                variant="contained"
                onClick={onShowModal}
                className={cls.item}
            >
                <EditOutlinedIcon />
                <EditProductModal
                    isOpen={isModal}
                    onClose={onCloseModal}
                    productId={product.id}
                    className={cls.item}
                />

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
