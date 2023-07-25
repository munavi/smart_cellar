import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Fab, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addNewProductReducer } from '../../model/slices/newProductSlice';
import cls from './AddNewProduct.module.scss';

export interface AddNewProductProps {
    className?: string,
    onShowModal: () => void;
}

const reducers: ReducersList = {
    newProduct: addNewProductReducer,
};

const AddNewProduct = memo((props: AddNewProductProps) => {
    const { t } = useTranslation();
    const { className, onShowModal } = props;

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddNewProduct, {}, [className])}>
                <ListItem className={cls.addBtn}>
                    <ListItemText>{t('Items')}</ListItemText>
                    <Fab color="primary" aria-label="add" size="small" onClick={onShowModal}>
                        <AddIcon />
                    </Fab>
                </ListItem>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddNewProduct;
