import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MuiModal } from './MuiModal';

export default {
    title: 'shared/MuiModal',
    component: MuiModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MuiModal>;

const Template: ComponentStory<typeof MuiModal> = (args) => <MuiModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
