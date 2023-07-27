import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import {
    FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import cls from './FilterBarCategory.module.scss';

interface FilterBarCategoryProps {
    className?: string,

}

export const FilterBarCategory = memo((props: FilterBarCategoryProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div className={classNames(cls.FilterBarCategory, {}, [className])}>
            <FormControl sx={{ marginLeft: 1 }}>
                <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>All</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Choose the category</FormHelperText>
            </FormControl>
        </div>
    );
});
