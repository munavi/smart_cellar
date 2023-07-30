import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChartPieCategory } from './ChartPieCategory';

export default {
    title: 'shared/ChartPieCategory',
    component: ChartPieCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChartPieCategory>;

const Template: ComponentStory<typeof ChartPieCategory> = (args) => <ChartPieCategory {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
