import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Primary } from 'entities/Counter/ui/Counter.stories';
import { ItemDetails } from './ItemDetails';

export default {
    title: 'entities/ItemDetails',
    component: ItemDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetails>;

const Template: ComponentStory<typeof ItemDetails> = (args) => <ItemDetails {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
})];
