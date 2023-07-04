import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface CategorySelectProps {
    className?: string,

}

export const CategorySelect = ({ className }: CategorySelectProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])} />
    );
};
