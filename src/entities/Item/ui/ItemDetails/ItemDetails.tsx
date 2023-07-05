import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import {
    getItemDetailsData,
    getItemDetailsError,
    getItemDetailsIsLoading,
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
        content = (
            <div>{t('Loading...')}</div>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('An error occurred while uploading the item details.')}
            />
        );
    } else {
        content = (
            <div>{t('Item Details')}</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ItemDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
