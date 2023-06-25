import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ItemDetailsPage from './ItemDetailsPage';

export default {
    title: 'shared/ItemDetailsPage',
    component: ItemDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ItemDetailsPage>;

const Template: ComponentStory<typeof ItemDetailsPage> = (args) => <ItemDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
