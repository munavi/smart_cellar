import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DatePicker as CustomDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import cls from './DatePicker.module.scss';
import 'dayjs/locale/de';

interface DatePickerProps {
    className?: string,

}

export const DatePicker = ({ className }: DatePickerProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.DatePicker, {}, [className])}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
                <CustomDatePicker />
            </LocalizationProvider>
        </div>
    );
};
