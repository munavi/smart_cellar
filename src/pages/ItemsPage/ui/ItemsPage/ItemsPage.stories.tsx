import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ItemsPage from './ItemsPage';

export default {
    title: 'pages/ItemsPage',
    component: ItemsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemsPage>;

const Template: ComponentStory<typeof ItemsPage> = (args) => <ItemsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
})];
