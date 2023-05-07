import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import React from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

export interface NavbarProps{
    className?: string,

}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'} className={cls.mainLink}>
                    Main Page
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED} to={'/about'}>
                    About Page
                </AppLink>
            </div>
        </div>
    );
};
