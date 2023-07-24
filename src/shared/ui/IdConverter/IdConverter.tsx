import {classNames} from "shared/lib/classNames/classNames";
import cls from './IdConverter.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';



interface IdConverterProps{
    className?: string,

}

export const IdConverter = memo((props: IdConverterProps) => {
    const { t } = useTranslation();
    const { clasName } = props;
    
    return (
        <div className={classNames(cls.IdConverter, {}, [className])}>
        
        </div>
    );
});
