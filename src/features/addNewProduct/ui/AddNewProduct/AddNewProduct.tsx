import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Fab, ListItem, ListItemText } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addNewProductActions, addNewProductReducer } from '../../model/slices/productSlice';
import {
    getAddNewProductError, getAddNewProductData,
} from '../../model/selectors/addNewProductSelectors';
import cls from './AddNewProduct.module.scss';

export interface AddNewProductProps {
    className?: string,
    onShowModal: () => void;
}

const reducers: ReducersList = {
    product: addNewProductReducer,
};

const AddNewProduct = memo((props: AddNewProductProps) => {
    const { t } = useTranslation();
    const { className, onShowModal } = props;
    const text = useSelector(getAddNewProductData);
    const error = useSelector(getAddNewProductError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addNewProductActions.setText(value));
    }, [dispatch]);

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
