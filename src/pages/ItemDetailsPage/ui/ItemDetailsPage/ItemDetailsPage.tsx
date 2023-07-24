import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { ProductDetails } from 'entities/Product';
import { useParams } from 'react-router-dom';
import cls from './ItemDetailsPage.module.scss';

interface ItemDetailsPageProps {
    className?: string,

}

const ItemDetailsPage = (props: ItemDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('item-details');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ItemDetailsPage, {}, [className])}>
                {t('Item has not found')}
            </div>
        );
    }

    return (
        <div className={classNames(cls.ItemDetailsPage, {}, [className])}>
            <ProductDetails id={id} />
        </div>
    );
};

export default memo(ItemDetailsPage);
