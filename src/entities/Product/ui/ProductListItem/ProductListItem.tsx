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
        <ListItem className={cls.listItem}>
            <Button size="small" variant="contained" onClick={() => onEdit(product.id)}>
                <EditOutlinedIcon />
            </Button>
            <ListItemText className={cls.listItemText}>
                {product.name}
            </ListItemText>
            <IdConverter value={product.categoryId} content="Category" />
            <Counter quantity={product.quantity} productId={product.id} className={cls.listItem} />
            <IdConverter value={product.storageLocationId} content="StorageLocation" />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <ListItemText className={cls.listItemText}>
                {product.date}
            </ListItemText>
            <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => onDelete(product.id)}
            >
                {t('DELETE')}
            </Button>
        </ListItem>
    );
};
