import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { getCategories } from 'entities/Category/model/selectors/getCategories/getCategories';
import { useSelector } from 'react-redux';
import { getStorageLocations }
    from 'entities/StorageLocation/model/selectors/getStorageLocations/getStorageLocations';
import cls from './IdConverter.module.scss';

interface IdConverterProps {
    className?: string,
    value?: number;
    content?: string;

}

export const IdConverter = (props: IdConverterProps) => {
    const { t } = useTranslation('select');
    const { className, value, content } = props;
    let name;
    const categories = useSelector(getCategories);
    const storageLocations = useSelector(getStorageLocations);
    switch (content) {
    case 'Category':
        // eslint-disable-next-line no-case-declarations
        const category = categories?.find((category) => value === category.id);
        name = category ? category.name : '';
        break;
    case 'StorageLocation':
        // eslint-disable-next-line max-len,no-case-declarations
        const storageLocation = storageLocations?.find((storageLocation) => value === storageLocation.id);
        name = storageLocation ? storageLocation.name : '';
        break;
    default:
        name = '';
        break;
    }

    return (

        <div className={classNames(cls.IdConverter, {}, [className])}>
            {t(name)}
        </div>

    );
};
