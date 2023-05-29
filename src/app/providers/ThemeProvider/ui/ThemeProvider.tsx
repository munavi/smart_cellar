import React, { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'app/providers/ThemeProvider/lib/ThemeContext';

const preferedTheme = ():Theme => {
    const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    console.log(theme);
    if (theme === null) {
        if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            return Theme.DARK;
        }
        return Theme.LIGHT;
    }
    return theme;
};

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(preferedTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
