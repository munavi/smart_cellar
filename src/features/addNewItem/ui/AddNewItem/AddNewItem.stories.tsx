import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddNewItem } from './AddNewItem';

export default {
    title: 'shared/AddNewItem',
    component: AddNewItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewItem>;

const Template: ComponentStory<typeof AddNewItem> = (args) => <AddNewItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
