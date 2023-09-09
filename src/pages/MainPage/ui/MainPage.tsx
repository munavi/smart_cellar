import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    ChartBarStorageLocation,
} from 'pages/MainPage/ui/Charts/ChartBarStorageLocation/ChartBarStorageLocation';
import { ChartPieCategory } from 'pages/MainPage/ui/Charts/ChartPieCategory/ChartPieCategory';
import { OverviewCard } from 'pages/MainPage/ui/Charts/OverviewCard/OverviewCard';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from 'pages/MainPage/ui/MainPage.module.scss';
import { Grid } from '@mui/material';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
    fetchProductStat,
} from 'entities/ProductStat/model/services/fetchProductStat/fetchProductStat';
import { useSelector } from 'react-redux';
import {
    getCountCategories,
    getCountProducts,
    getCountStorageLocations,
    getDataByCategory,
    getDataByStorageLocation,
} from 'entities/ProductStat/model/selectors/productStat';
import {
    DynamicModuleLoader, ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { productStatReducer } from 'entities/ProductStat/model/slice/productStatSlice';

interface MainPageProps {
    className?: string,
}

const reducers: ReducersList = {
    productStat: productStatReducer,
};

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchProductStat());
    });

    const allProducts = useSelector(getCountProducts);
    const countByCategories = useSelector(getCountCategories);
    const countByStorageLocations = useSelector(getCountStorageLocations);
    const dataByCategory = useSelector(getDataByCategory);
    const dataByStorageLocation = useSelector(getDataByStorageLocation);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.MainPage, {}, [className])}>
                <div>
                    {t('Main page')}
                </div>
                <div className={cls.OverviewCardContainer}>
                    <Grid
                        container
                        spacing={3}
                        justifyContent="center"
                    >
                        <Grid
                            xs={12}
                            sm={6}
                            lg={3}
                            sx={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
                        >
                            <OverviewCard
                                label={t('Products')}
                                sx={{ height: '100%' }}
                                value={allProducts?.toString()}
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={6}
                            lg={3}
                            sx={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
                        >
                            <OverviewCard
                                label={t('Categories')}
                                sx={{ height: '100%' }}
                                value={countByCategories?.toString()}
                            />
                        </Grid>
                        <Grid
                            xs={12}
                            sm={6}
                            lg={3}
                            sx={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}
                        >
                            <OverviewCard
                                label={t('Locations')}
                                sx={{ height: '100%' }}
                                value={countByStorageLocations?.toString()}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className={cls.ChartContainer}>
                    <ChartBarStorageLocation chartData={dataByStorageLocation} />
                </div>
                <div className={cls.ScaledChart}>
                    <ChartPieCategory chartData={dataByCategory} />
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default MainPage;
