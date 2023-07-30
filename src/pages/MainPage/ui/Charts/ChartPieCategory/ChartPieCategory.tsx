import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PieChart } from '@mui/x-charts';
import { ProductStat } from 'entities/ProductStat';
import cls from './ChartPieCategory.module.scss';

interface ChartPieCategoryProps {
    className?: string,
    chartData?: ProductStat[],

}

export const ChartPieCategory = memo((props: ChartPieCategoryProps) => {
    const { t } = useTranslation();
    const { className, chartData } = props;

    const seriesData = chartData?.map((item: { id: number; name: string; countProducts: number }) => ({
        id: item.id,
        value: item.countProducts,
        label: item.name,
    })) || [];

    return (
        <div className={classNames(cls.ChartPieCategory, {}, [className])}>
            <PieChart
                series={[
                    {
                        data: seriesData,
                    },
                ]}
                width={600}
                height={600}
            />
        </div>
    );
});
