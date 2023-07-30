import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilterBar } from './FilterBar';

export default {
    title: 'shared/FilterBar',
    component: FilterBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilterBar>;

const Template: ComponentStory<typeof FilterBar> = (args) => <FilterBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
