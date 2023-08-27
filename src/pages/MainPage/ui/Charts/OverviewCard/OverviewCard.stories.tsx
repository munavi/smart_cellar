import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OverviewCard } from './OverviewCard';

export default {
    title: 'shared/OverviewCard',
    component: OverviewCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OverviewCard>;

const Template: ComponentStory<typeof OverviewCard> = (args) => <OverviewCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
