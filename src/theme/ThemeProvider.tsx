import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

const preferedTheme = ():Theme => {
    let theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    console.log(theme);
    if(theme === null){
        if(window.matchMedia("(prefers-color-scheme:dark)").matches) {
            return Theme.DARK;
        } else {
            return Theme.LIGHT;
        }
    }
    return theme;
}

const ThemeProvider: FC = ({children}) => {

    const[theme, setTheme] = useState<Theme>(preferedTheme);

    const defaultProps = useMemo( () => ({
        theme: theme,
        setTheme: setTheme
    }), [theme] )

    return (
        <ThemeContext.Provider value ={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;