import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Item } from 'entities/Item';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Category } from 'entities/Category';
import { StorageLocation } from 'entities/StorageLocation';
import { ItemDetails } from './ItemDetails';

export default {
    title: 'entities/ItemDetails',
    component: ItemDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetails>;

const item : Item = {
    id: '1',
    itemName: 'Nudeln',
    number: 16,
    category: Category.Cereals,
    storageLocation: StorageLocation.StorageRoom,
    date: '01/12/2026',
};

const Template: ComponentStory<typeof ItemDetails> = (args) => <ItemDetails {...args} />;

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
