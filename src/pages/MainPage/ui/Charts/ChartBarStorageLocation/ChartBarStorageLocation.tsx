import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { BarChart } from '@mui/x-charts';
import { ProductStat } from 'entities/ProductStat';
import cls from './ChartBarStorageLocation.module.scss';

interface ChartBarStorageLocationProps {
    className?: string,
    chartData?: ProductStat[],

}

export const ChartBarStorageLocation = memo((props: ChartBarStorageLocationProps) => {
    const { t } = useTranslation();
    const { className, chartData } = props;

    const seriesData = chartData?.map((item) => ({
        data: [item.countProducts],
        label: item.name,
    })) || [];

    return (
        <div className={classNames(cls.ChartBarStorageLocation, {}, [className])}>
            <BarChart
                series={seriesData}
                width={900}
                height={400}
            />
        </div>
    );
});
