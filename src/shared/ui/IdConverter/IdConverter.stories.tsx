import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IdConverter } from './IdConverter';

export default {
    title: 'shared/IdConverter',
    component: IdConverter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof IdConverter>;

const Template: ComponentStory<typeof IdConverter> = (args) => <IdConverter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
