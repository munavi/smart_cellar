import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Fab, ListItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { StorageLocation, StorageLocationSelect } from 'entities/StorageLocation';
import { Category, CategorySelect } from 'entities/Category';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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
    const { t } = useTranslation();
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

    const onChangeItemName = useCallback((name?: string) => {
        dispatch(addNewProductActions.updateNewProduct({ name }));
    }, [dispatch]);

    const onChangeItemQuantity = useCallback((quantity?: string) => {
        dispatch(addNewProductActions.updateNewProduct({ quantity }));
    }, [dispatch]);

    const onChangeDate = useCallback((date: string) => {
        dispatch(addNewProductActions.updateNewProduct({ date }));
    }, [dispatch]);

    const onChangeCategory = useCallback((categoryId: number) => {
        dispatch(addNewProductActions.updateNewProduct({ categoryId }));
    }, [dispatch]);

    const onChangeStorageLocation = useCallback((storageLocationId: number) => {
        dispatch(addNewProductActions.updateNewProduct({ storageLocationId }));
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(addNewProduct());
        onCloseModal();
        dispatch(addNewProductActions.cancelEdit());
    }, [dispatch, onCloseModal]);

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
                {' '}
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Item name')}
                    align={TextAlign.CENTER}
                />
                <Input
                    placeholder="Item name"
                    onChange={onChangeItemName}
                    value={newProductData?.name || ''}
                />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Item Quantity')}
                    align={TextAlign.CENTER}
                />
                <Input
                    placeholder="Item quantity"
                    onChange={onChangeItemQuantity}
                    value={newProductData?.quantity || ''}
                />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('change a date')}
                    align={TextAlign.CENTER}
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
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancel}
                >
                    CANCEL
                </Button>
                <Button
                    onClick={onSave}
                >
                    SAVE
                </Button>

            </Modal>

        </div>
    );
});

export default AddNewProduct;
