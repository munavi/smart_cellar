import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilterBarName } from './FilterBarName';

export default {
    title: 'shared/FilterBar',
    component: FilterBarName,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilterBarName>;

const Template: ComponentStory<typeof FilterBarName> = (args) => <FilterBarName {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
