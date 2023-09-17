import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker as CustomDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import cls from './DatePicker.module.scss';
import 'dayjs/locale/de';

interface DatePickerProps {
    className?: string,
    onChange? :(value: string) => void,
    value?: string,

}

export const DatePicker = ({ className, onChange, value }: DatePickerProps) => {
    const { t } = useTranslation();
    const handleDateChange = (date: Dayjs | null) => {
        const formattedDate = date ? date.format('YYYY-MM-DD') : '';

        if (onChange) {
            onChange(formattedDate);
        }
    };
    const parsedValue = value ? dayjs(value) : null;

    return (
        <div className={classNames(cls.DatePicker, {}, [className])}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                <CustomDatePicker onChange={handleDateChange} value={parsedValue} />
            </LocalizationProvider>
        </div>
    );
};
