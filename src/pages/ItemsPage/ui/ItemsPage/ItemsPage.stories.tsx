import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ItemsPage from './ItemsPage';

export default {
    title: 'shared/ItemsPage',
    component: ItemsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemsPage>;

const Template: ComponentStory<typeof ItemsPage> = (args) => <ItemsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
