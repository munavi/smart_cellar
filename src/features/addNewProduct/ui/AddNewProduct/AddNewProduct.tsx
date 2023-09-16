import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ChangeEvent,
    memo, useCallback, useEffect, useState,
} from 'react';
import {
    Button, Fab, ListItem, Snackbar, TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { StorageLocation, StorageLocationSelect } from 'entities/StorageLocation';
import { Category, CategorySelect } from 'entities/Category';
import { useSelector } from 'react-redux';
import { getAddNewProductData } from 'features/addNewProduct/model/selectors/newProductSelectors';
import { addNewProductActions } from 'features/addNewProduct/model/slices/newProductSlice';
import { addNewProduct } from 'features/addNewProduct/model/services/addNewProduct/addNewProduct';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './AddNewProduct.module.scss';

export interface AddNewProductProps {
    className?: string,
    onShowModal: () => void;
    isModal: boolean;
    onCloseModal: () => void;
    categories: Category[];
    storageLocations: StorageLocation[];
}

const AddNewProduct = memo((props: AddNewProductProps) => {
    const { t } = useTranslation('productlist');
    const {
        className,
        onShowModal,
        isModal,
        onCloseModal,
        storageLocations,
        categories,
    } = props;

    const dispatch = useAppDispatch();
    const newProductData = useSelector(getAddNewProductData);

    const [isNameValid, setNameValid] = useState(true);
    const [isQuantityValid, setQuantityValid] = useState(true);
    const [isDateValid, setDateValid] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        const isNameEntered = !!newProductData?.name?.trim();
        const isQuantityEntered = !!newProductData?.quantity?.trim();
        const isDateEntered = !!newProductData?.date?.trim();

        setNameValid(isNameEntered);
        setQuantityValid(isQuantityEntered);
        setDateValid(isDateEntered);
    }, [newProductData]);

    const onChangeItemName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        dispatch(addNewProductActions.updateNewProduct({ name }));
    }, [dispatch]);

    const onChangeItemQuantity = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const quantity = event.target.value;
        const parsedQuantity = parseInt(quantity || '', 10);
        dispatch(addNewProductActions.updateNewProduct(
            { quantity: Number.isNaN(parsedQuantity) ? undefined : parsedQuantity.toString() },
        ));
    }, [dispatch]);

    const onChangeDate = useCallback((dateString: string) => {
        dispatch(addNewProductActions.updateNewProduct({ date: dateString }));
    }, [dispatch]);

    const isSaveButtonEnabled = isNameValid && isQuantityValid && isDateValid;

    const onChangeCategory = useCallback((categoryId: number) => {
        dispatch(addNewProductActions.updateNewProduct({ categoryId }));
    }, [dispatch]);

    const onChangeStorageLocation = useCallback((storageLocationId: number) => {
        dispatch(addNewProductActions.updateNewProduct({ storageLocationId }));
    }, [dispatch]);

    const openSnackbar = () => {
        setSnackbarOpen(true);
    };

    const closeSnackbar = () => {
        setSnackbarOpen(false);
    };

    const onSave = useCallback(() => {
        if (isSaveButtonEnabled) {
            dispatch(addNewProduct());
            onCloseModal();
            dispatch(addNewProductActions.cancelEdit());
            openSnackbar();
        } else {
            console.error('Please enter all required data before saving.');
        }
    }, [dispatch, onCloseModal, isSaveButtonEnabled]);

    const onCancel = useCallback(() => {
        dispatch(addNewProductActions.cancelEdit());
        onCloseModal();
    }, [dispatch, onCloseModal]);

    return (
        <div className={classNames(cls.AddNewProduct, {}, [className])}>
            <ListItem className={cls.addBtn}>
                <Fab color="primary" aria-label="add" size="small" onClick={onShowModal}>
                    <AddIcon />
                </Fab>
            </ListItem>
            <Modal
                isOpen={isModal}
                onClose={onCloseModal}
            >
                <TextField
                    label={t('Item name')}
                    onChange={onChangeItemName}
                    value={newProductData?.name || ''}
                />
                <TextField
                    label={t('Item Quantity')}
                    onChange={onChangeItemQuantity}
                    value={newProductData?.quantity || ''}
                />
                <DatePicker onChange={onChangeDate} value={newProductData?.date || ''} />
                <StorageLocationSelect
                    value={newProductData?.storageLocationId}
                    onChange={onChangeStorageLocation}
                    storageLocations={storageLocations || []}
                />
                <CategorySelect
                    value={newProductData?.categoryId}
                    onChange={onChangeCategory}
                    categories={categories || []}
                />
                <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    onClick={onSave}
                    disabled={!isSaveButtonEnabled}
                >
                    {t('Save')}
                </Button>
                <Button
                    size="small"
                    color="error"
                    variant="outlined"
                    onClick={onCancel}
                >
                    {t('Cancel')}
                </Button>
            </Modal>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={closeSnackbar}
                message={t('Product added successfully')}
            />
        </div>
    );
});

export default AddNewProduct;
