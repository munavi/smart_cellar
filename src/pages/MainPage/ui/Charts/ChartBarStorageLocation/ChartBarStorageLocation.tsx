import React, { memo } from 'react';
import {
    Bar, BarChart, Tooltip, XAxis, YAxis,
} from 'recharts';
import classNames from 'classnames';
import { ProductStat } from 'entities/ProductStat';
import './ChartBarStorageLocation.module.scss';
import { useTranslation } from 'react-i18next';

interface ChartBarStorageLocationProps {
    className?: string;
    chartData?: ProductStat[];
}

export const ChartBarStorageLocation = memo((props: ChartBarStorageLocationProps) => {
    const { className, chartData } = props;

    const { t } = useTranslation('select');

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const seriesData = chartData?.map((item, index) => ({
        name: t(item.name),
        quantity: item.countProducts,
        fill: COLORS[index % COLORS.length],
    })) || [];

    return (
        <div className={classNames('ChartBarStorageLocation', {}, [className])}>
            <BarChart
                width={1100}
                height={400}
                data={seriesData}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="quantity" fill="fill" />
            </BarChart>
        </div>
    );
});
