import React from 'react';
import {
    ListItem, ListItemText, Button,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Counter } from 'entities/Counter';
import { Product } from 'entities/Product';
import { useTranslation } from 'react-i18next';
import { IdConverter } from 'shared/ui/IdConverter/IdConverter';
import cls from './ProductListItem.module.scss';

interface ProductListItemProps{
        product: Product;
        onDelete: (productId: number) => void;
        onEdit: (productId: number) => void;

}

export const ProductListItem = ({ product, onDelete, onEdit }: ProductListItemProps) => {
    const { t } = useTranslation();

    return (
        <ListItem className={cls.container}>
            <Button
                size="small"
                variant="contained"
                onClick={() => onEdit(product.id)}
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
                onClick={() => onDelete(product.id)}
                className={cls.item}
            >
                {t('DELETE')}
            </Button>
        </ListItem>
    );
};
