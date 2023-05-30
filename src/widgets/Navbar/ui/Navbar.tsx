import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

export interface NavbarProps{
    className?: string,

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links} />
        </div>
    );
};
