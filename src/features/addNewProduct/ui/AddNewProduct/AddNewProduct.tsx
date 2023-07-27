import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Fab, ListItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import cls from './AddNewProduct.module.scss';

export interface AddNewProductProps {
    className?: string,
    onShowModal: () => void;
}

const AddNewProduct = memo((props: AddNewProductProps) => {
    const { t } = useTranslation();
    const { className, onShowModal } = props;

    return (
        <div className={classNames(cls.AddNewProduct, {}, [className])}>
            <ListItem className={cls.addBtn}>
                <Fab color="primary" aria-label="add" size="small" onClick={onShowModal}>
                    <AddIcon />
                </Fab>
            </ListItem>
        </div>
    );
});

export default AddNewProduct;
