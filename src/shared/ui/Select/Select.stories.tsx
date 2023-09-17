import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomSelect } from 'shared/ui/Select/CustomSelect';

export default {
    title: 'shared/Select',
    component: CustomSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args) => <CustomSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Choose a value',
    options: [
        { value: 1, content: 'First' },
        { value: 2, content: 'Second' },
    ],
};
