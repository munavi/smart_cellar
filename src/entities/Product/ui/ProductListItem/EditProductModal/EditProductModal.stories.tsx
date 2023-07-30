import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditProductModal } from './EditProductModal';

export default {
    title: 'shared/EditProductModal',
    component: EditProductModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditProductModal>;

const Template: ComponentStory<typeof EditProductModal> = (args) => <EditProductModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
