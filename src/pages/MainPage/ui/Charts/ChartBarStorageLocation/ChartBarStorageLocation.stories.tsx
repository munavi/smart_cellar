import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChartBarStorageLocation } from './ChartBarStorageLocation';

export default {
    title: 'shared/ChartBarStorageLocation',
    component: ChartBarStorageLocation,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ChartBarStorageLocation>;

const Template: ComponentStory<typeof ChartBarStorageLocation> = (args) => <ChartBarStorageLocation {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
