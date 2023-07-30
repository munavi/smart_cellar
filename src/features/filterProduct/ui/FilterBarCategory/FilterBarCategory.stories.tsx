import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FilterBarCategory } from './FilterBarCategory';

export default {
    title: 'shared/FilterBarCategory',
    component: FilterBarCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilterBarCategory>;

const Template: ComponentStory<typeof FilterBarCategory> = (args) => <FilterBarCategory {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
