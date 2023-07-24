import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { getCategories } from 'entities/Category/model/selectors/getCategories/getCategories';
import { useSelector } from 'react-redux';
import {
    getStorageLocations,
} from 'entities/StorageLocation/model/selectors/getStorageLocations/getStorageLocations';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { categoriesReducer } from 'entities/Category/model/slice/categoriesSlice';
import {
    storageLocationsReducer,
} from 'entities/StorageLocation/model/slice/storageLocationsSlice';
import cls from './IdConverter.module.scss';

interface IdConverterProps {
    className?: string,
    value?: number;
    content?: string;

}
const reducers: ReducersList = {
    categories: categoriesReducer,
    storageLocations: storageLocationsReducer,
};

export const IdConverter = (props: IdConverterProps) => {
    const { t } = useTranslation();
    const { className, value, content } = props;
    let name;
    const categories = useSelector(getCategories);
    const storageLocations = useSelector(getStorageLocations);
    if (content === 'Category') {
        name = categories?.find((category) => value === category.id);
    } else if (content === 'StorageLocation') {
        name = storageLocations?.find((storageLocation) => value === storageLocation.id);
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.IdConverter, {}, [className])}>
                {name ? name.name : ''}
            </div>
        </DynamicModuleLoader>

    );
};
