import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import cls from './PageError.module.scss';

interface PageErrorProps{
    className?: string,

}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('An unexpected error occurred')}</p>
            <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={reloadPage}
            >
                {t('Refresh page')}
            </Button>
        </div>
    );
};
