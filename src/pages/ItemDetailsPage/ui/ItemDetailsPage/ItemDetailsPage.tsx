import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ItemDetailsPage.module.scss';

interface ItemDetailsPageProps {
    className?: string,

}

const ItemDetailsPage = ({ className }: ItemDetailsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ItemDetailsPage, {}, [className])}>
            {t('Item details')}
        </div>
    );
};

export default memo(ItemDetailsPage);
