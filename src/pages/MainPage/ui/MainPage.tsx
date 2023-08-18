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
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewCard
                            label="All Products"
                            sx={{ height: '100%' }}
                            value={allProducts?.toString()}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewCard
                            label="All Categories"
                            sx={{ height: '100%' }}
                            value={countByCategories?.toString()}
                        />
                    </Grid>
                    <Grid
                        xs={12}
                        sm={6}
                        lg={3}
                    >
                        <OverviewCard
                            label="All Storage Locations"
                            sx={{ height: '100%' }}
                            value={countByStorageLocations?.toString()}
                        />
                    </Grid>
                </Grid>

                <div>
                    <ChartBarStorageLocation chartData={dataByStorageLocation} />
                    <ChartPieCategory chartData={dataByCategory} />
                </div>
            </div>
        </DynamicModuleLoader>
    );
};

export default MainPage;
