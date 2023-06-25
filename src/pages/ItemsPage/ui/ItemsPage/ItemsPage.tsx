import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ItemsPage.module.scss';

interface ItemsPageProps {
    className?: string,

}

const ItemsPage = ({ className }: ItemsPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ItemsPage, {}, [className])}>
            ITEMS PAGE
        </div>
    );
};

export default memo(ItemsPage);
