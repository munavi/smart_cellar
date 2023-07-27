import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'shared/ui/Select/CustomSelect';
import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getStorageLocations,
} from 'entities/StorageLocation/model/selectors/getStorageLocations/getStorageLocations';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchStorageLocations,
} from 'entities/StorageLocation/model/services/fetchStorageLocations/fetchStorageLocations';
import { DynamicModuleLoader, ReducersList } from
    'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    storageLocationsReducer,
} from 'entities/StorageLocation/model/slice/storageLocationsSlice';

interface StorageLocationSelectProps {
    className?: string;
    value: number | string;
    onChange?: (value: number) => void;
    readonly?: boolean;
    zeroElement?: boolean;
}

const reducers: ReducersList = {
    storageLocations: storageLocationsReducer,
};

export const StorageLocationSelect = memo(({
    className, value, onChange, readonly, zeroElement,
}: StorageLocationSelectProps) => {
    const { t } = useTranslation();

    const storageLocations = useSelector(getStorageLocations);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchStorageLocations());
    });
    const options = useMemo(() => (storageLocations || []).map((storageLocation) => ({
        value: storageLocation.id,
        content: storageLocation.name,
    })), [storageLocations]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(Number(value));
    }, [onChange]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <CustomSelect
                className={classNames('', {}, [className])}
                label={t('Choose a storage location')}
                options={options}
                value={value.toString()}
                onChange={onChangeHandler}
                readonly={readonly}
                zeroElement={zeroElement}
            />
        </DynamicModuleLoader>
    );
});
