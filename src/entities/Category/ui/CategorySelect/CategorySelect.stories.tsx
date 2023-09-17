import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CategorySelect } from './CategorySelect';

export default {
    title: 'shared/CategorySelect',
    component: CategorySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategorySelect>;

const Template: ComponentStory<typeof CategorySelect> = (args) => <CategorySelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
