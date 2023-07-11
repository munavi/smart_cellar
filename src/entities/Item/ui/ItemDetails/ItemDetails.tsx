import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import React, { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import {
    Button, ListItem, ListItemText,
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Counter } from 'entities/Counter';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import {
    getItemDetailsData, getItemDetailsError, getItemDetailsIsLoading,
} from '../../model/selectors/itemDetails';
import { fetchItemById } from '../../model/services/fetchItemById/fetchItemById';
import { itemDetailsReducer } from '../../model/slice/itemDetailsSlice';
import cls from './ItemDetails.module.scss';

interface ItemDetailsProps {
    className?: string,
    id: string;
}

const reducers: ReducersList = {
    itemDetails: itemDetailsReducer,
};

export const ItemDetails = memo((props: ItemDetailsProps) => {
    const { t } = useTranslation();
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getItemDetailsIsLoading);
    const item = useSelector(getItemDetailsData);
    const error = useSelector(getItemDetailsError);

    useEffect(() => {
        dispatch(fetchItemById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <div className={cls.listItem}>
                    <Skeleton className={cls.skeletonItem} height={56} width={582} />
                </div>
            </div>
        );
    } if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error occurred while uploading the item details.')}
            />
        );
    } else {
        content = (
            <ListItem className={cls.listItem}>
                <Button size="small" variant="contained"><EditOutlinedIcon /></Button>
                <ListItemText className={cls.listItemText}>
                    {item?.itemName}
                </ListItemText>
                <Counter className={cls.listItem} />
                <ListItemText className={cls.listItemText}>
                    {item?.storageLocation}
                </ListItemText>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <ListItemText className={cls.listItemText}>
                    {item?.date}
                </ListItemText>
                <Button size="small" color="error" variant="contained">
                    {t('DELETE')}
                </Button>
            </ListItem>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <div className={classNames(cls.ItemDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
