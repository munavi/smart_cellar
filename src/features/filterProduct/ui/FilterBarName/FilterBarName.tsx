import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useState } from 'react';
import { TextField } from '@mui/material';
import cls from './FilterBarName.module.scss';

interface FilterBarProps {
    className?: string,
    onFilterChange: (value: string) => void;

}

export const FilterBarName = memo((props: FilterBarProps) => {
    const { t } = useTranslation('productlist');
    const { className, onFilterChange } = props;
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchTerm(value);
        onFilterChange(value);
    };

    return (
        <div className={classNames(cls.FilterBar, {}, [className])}>
            <TextField
                id="outlined-basic"
                label={t('Search by name')}
                variant="outlined"
                onChange={handleSearchChange}
            />
        </div>
    );
});
