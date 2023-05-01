import React, {Suspense} from 'react';
import './styles/index.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import { Link } from 'react-router-dom';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>Hauptseite</Link>
            <Link to={"/about"}>Andere Seite</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync />} />
                    <Route path={"/"} element={<MainPage />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
