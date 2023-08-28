import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'shared/ui/Select/CustomSelect';
import { memo, useCallback, useMemo } from 'react';
import { StorageLocation } from 'entities/StorageLocation';

interface StorageLocationSelectProps {
    className?: string;
    value?: number;
    onChange?: (value: number) => void;
    readonly?: boolean;
    zeroElement?: boolean;
    storageLocations: StorageLocation[];
}

export const StorageLocationSelect = memo(({
    className, value, onChange, readonly, zeroElement, storageLocations,
}: StorageLocationSelectProps) => {
    const { t } = useTranslation('productlist');

    const options = useMemo(() => (storageLocations || []).map((storageLocation) => ({
        value: storageLocation.id,
        content: storageLocation.name,
    })), [storageLocations]);

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(Number(value));
    }, [onChange]);

    return (
        <CustomSelect
            className={classNames('', {}, [className])}
            label={t('Choose a storage location')}
            options={options}
            value={value?.toString()}
            onChange={onChangeHandler}
            readonly={readonly}
            zeroElement={zeroElement}
        />
    );
});
