import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Counter } from './Counter';

export default {
    title: 'entities/Counter',
    component: Counter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Counter>;

// eslint-disable-next-line react/jsx-props-no-spreading
// @ts-ignore
const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
