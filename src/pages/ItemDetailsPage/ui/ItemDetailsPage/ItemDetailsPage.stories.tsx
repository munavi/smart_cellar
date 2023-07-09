import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Item } from 'entities/Item';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Category } from 'entities/Category';
import { StorageLocation } from 'entities/StorageLocation';
import ItemDetailsPage from './ItemDetailsPage';

export default {
    title: 'pages/ItemDetailsPage',
    component: ItemDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetailsPage>;

const item : Item = {
    id: '1',
    itemName: 'Nudeln',
    number: 16,
    category: Category.Cereals,
    storageLocation: StorageLocation.StorageRoom,
    date: '01/12/2026',
};

const Template: ComponentStory<typeof ItemDetailsPage> = (args) => <ItemDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    itemDetails: {
        data: item,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    itemDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    itemDetails: {
        error: 'error',
    },
})];
