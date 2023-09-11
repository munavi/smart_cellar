import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, { ChangeEvent, memo, useMemo } from 'react';
import {
    FormControl, FormHelperText, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOption {
    value: number;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
    zeroElement?: boolean;
}

export const CustomSelect = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly,
        zeroElement = false,
    } = props;

    const selectedValue = value || '';
    const { t } = useTranslation('select');

    const onChangeHandler = (e: SelectChangeEvent) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const optionsList = useMemo(() => (options || []).map((opt) => (
        <MenuItem key={opt.value} value={opt.value}>
            {t(opt.content)}
        </MenuItem>
    )), [options, t]);

    const mods: Mods = {};

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            <FormControl variant="outlined" fullWidth sx={{ minWidth: 200 }}>
                <InputLabel id="select-label">{label}</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    disabled={readonly}
                    label={label}
                    defaultValue={zeroElement ? selectedValue : undefined}
                    value={zeroElement ? undefined : selectedValue}
                    onChange={onChangeHandler}
                >
                    {zeroElement && (
                        <MenuItem key="0" value="0">
                            <em>{t('All')}</em>
                        </MenuItem>
                    )}
                    {optionsList}
                </Select>
            </FormControl>
        </div>
    );
});
