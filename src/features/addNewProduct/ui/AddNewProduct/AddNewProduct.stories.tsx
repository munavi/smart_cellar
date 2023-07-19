import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddNewProduct from './AddNewProduct';

export default {
    title: 'features/AddNewProduct',
    component: AddNewProduct,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewProduct>;

const Template: ComponentStory<typeof AddNewProduct> = (args) => <AddNewProduct {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
