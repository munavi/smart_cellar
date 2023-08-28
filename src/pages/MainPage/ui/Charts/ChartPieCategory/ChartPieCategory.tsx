import React, { memo } from 'react';
import {
    Cell, Pie, PieChart, Tooltip,
} from 'recharts';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ProductStat } from 'entities/ProductStat';

interface ChartPieCategoryProps {
    className?: string,
    chartData?: ProductStat[],

}

export const ChartPieCategory = memo((props: ChartPieCategoryProps) => {
    const { t } = useTranslation('select');
    const { className, chartData } = props;

    const seriesData = chartData?.map(
        (item: {
                id: number;
                name: string;
                countProducts: number }) => ({
            id: item.id,
            value: item.countProducts,
            label: t(item.name),
        }),
    ) || [];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className={classNames('ChartPieCategory', {}, [className])}>
            <PieChart width={1000} height={400}>
                <Pie
                    data={seriesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ label }) => label}
                >
                    {
                        seriesData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))
                    }
                </Pie>
                <Tooltip formatter={(value) => [value]} />
            </PieChart>
        </div>
    );
});
