import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
    title: 'shared/DatePicker',
    component: DatePicker,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
