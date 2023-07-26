import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { DatePicker } from 'shared/ui/DatePicker/DatePicker';
import { StorageLocationSelect } from 'entities/StorageLocation';
import { CategorySelect } from 'entities/Category';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { productDetailsActions } from 'entities/Product/model/slice/productDetailsSlice';
import { Product } from 'entities/Product';
import {
    updateProductById,
} from 'entities/Product/model/services/updateProductById/updateProductById';
import { useSelector } from 'react-redux';
import { getProductDetailsForm } from 'entities/Product/model/selectors/productDetails';
import cls from './EditProductModal.module.scss';

interface EditProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    productId: number;
}

export const EditProductModal = memo((props: EditProductModalProps) => {
    const { t } = useTranslation();
    const {
        isOpen, onClose, className, productId,
    } = props;
    const dispatch = useAppDispatch();
    const productForm = useSelector((getProductDetailsForm));

    const onChangeItemName = useCallback((name: string) => {
        dispatch(productDetailsActions.editProduct({
            updatedData: {
                name,
            },
        }));
    }, [dispatch]);

    const onChangeItemQuantity = useCallback((quantity: string) => {
        const parsedQuantity = parseInt(quantity, 10);

        dispatch(productDetailsActions.editProduct({
            updatedData: {
                quantity: !Number.isNaN(parsedQuantity) ? parsedQuantity : undefined,
            },
        }));
    }, [dispatch]);

    const onChangeDate = useCallback((dateString: string) => {
        const date = new Date(dateString);

        if (!Number.isNaN(date.getTime())) {
            dispatch(productDetailsActions.editProduct({
                updatedData: {
                    date: date.toISOString(),
                },
            }));
        }
    }, [dispatch]);

    const onChangeCategory = useCallback((categoryId: number) => {
        dispatch(productDetailsActions.editProduct({
            updatedData: {
                categoryId,
            },
        }));
    }, [dispatch]);

    const onChangeStorageLocation = useCallback((storageLocationId: number) => {
        dispatch(productDetailsActions.editProduct({
            updatedData: {
                storageLocationId,
            },
        }));
    }, [dispatch]);

    const onSave = useCallback(() => {
        const updatedProductForm = productForm || {} as Partial<Product>;
        dispatch(productDetailsActions.updateProductById({
            productId,
            updatedData:
                updatedProductForm,
        }));
        dispatch(updateProductById(productId));
        onClose();
    }, [dispatch, onClose, productForm, productId]);

    const onCancel = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <div className={classNames(cls.EditProductModal, {}, [className])}>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
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
                    value={productForm?.name || ''}
                />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Item Quantity')}
                    align={TextAlign.CENTER}
                />
                <Input
                    placeholder="Item quantity"
                    onChange={onChangeItemQuantity}
                    value={productForm?.quantity || ''}
                />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('change a date')}
                    align={TextAlign.CENTER}
                />
                <DatePicker onChange={onChangeDate} value={productForm?.date || ''} />
                <StorageLocationSelect
                    value={productForm?.storageLocationId}
                    onChange={onChangeStorageLocation}
                />
                <CategorySelect value={productForm?.categoryId} onChange={onChangeCategory} />
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
