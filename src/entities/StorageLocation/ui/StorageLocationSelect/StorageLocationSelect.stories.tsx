import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StorageLocationSelect } from './StorageLocationSelect';

export default {
    title: 'shared/StorageLocationSelect',
    component: StorageLocationSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StorageLocationSelect>;

const Template: ComponentStory<typeof StorageLocationSelect> = (args) => <StorageLocationSelect {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
