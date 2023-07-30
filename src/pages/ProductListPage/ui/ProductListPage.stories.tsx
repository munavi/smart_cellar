import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProductListPage from './ProductListPage';

export default {
    title: 'pages/ItemsPage',
    component: ProductListPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProductListPage>;

const Template: ComponentStory<typeof ProductListPage> = (args) => <ProductListPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
})];
