import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface StorageLocationSelectProps {
    className?: string,

}

export const StorageLocationSelect = ({ className }: StorageLocationSelectProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])} />
    );
};
