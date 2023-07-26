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
import { updateProductById } from 'entities/Product/model/services/updateProductById/updateProductById';
import cls from './EditProductModal.module.scss';

interface EditProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    product?: Product;
    productId: number;
}

export const EditProductModal = memo((props: EditProductModalProps) => {
    const { t } = useTranslation();
    const {
        isOpen, onClose, className, product, productId,
    } = props;
    const dispatch = useAppDispatch();

    const onChangeItemName = useCallback((name: string) => {
        dispatch(productDetailsActions.updateProductById({
            productId,
            updatedData: {
                name,
            },
        }));
        dispatch(updateProductById(productId));
    }, [dispatch, productId]);

    const onChangeItemQuantity = useCallback((quantity: string) => {
        const parsedQuantity = parseInt(quantity, 10);

        dispatch(productDetailsActions.updateProductById({
            productId,
            updatedData: {
                quantity: !Number.isNaN(parsedQuantity) ? parsedQuantity : undefined,
            },
        }));
        dispatch(updateProductById(productId));
    }, [dispatch, productId]);

    const onChangeDate = useCallback((dateString: string) => {
        const date = new Date(dateString);

        if (!Number.isNaN(date.getTime())) {
            dispatch(productDetailsActions.updateProductById({
                productId,
                updatedData: {
                    date: date.toISOString(),
                },
            }));
            dispatch(updateProductById(productId));
        }
    }, [dispatch, productId]);

    const onChangeCategory = useCallback((categoryId: number) => {
        dispatch(productDetailsActions.updateProductById({
            productId,
            updatedData: {
                categoryId,
            },
        }));
        dispatch(updateProductById(productId));
    }, [dispatch, productId]);

    const onChangeStorageLocation = useCallback((storageLocationId: number) => {
        dispatch(productDetailsActions.updateProductById({
            productId,
            updatedData: {
                storageLocationId,
            },
        }));
        dispatch(updateProductById(productId));
    }, [dispatch, productId]);

    const onSave = useCallback(() => {
        dispatch(updateProductById(productId));
        onClose();
        // dispatch(addNewProductActions.cancelEdit());
    }, [dispatch, onClose, productId]);

    const onCancel = useCallback(() => {
        // dispatch(addNewProductActions.cancelEdit());
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
                    value={product?.name || ''}
                />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('Item Quantity')}
                    align={TextAlign.CENTER}
                />
                <Input
                    placeholder="Item quantity"
                    onChange={onChangeItemQuantity}
                    value={product?.quantity || ''}
                />
                <Text
                    theme={TextTheme.PRIMARY}
                    title={t('change a date')}
                    align={TextAlign.CENTER}
                />
                <DatePicker onChange={onChangeDate} value={product?.date || ''} />
                <StorageLocationSelect
                    value={product?.storageLocationId}
                    onChange={onChangeStorageLocation}
                />
                <CategorySelect value={product?.categoryId} onChange={onChangeCategory} />
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
