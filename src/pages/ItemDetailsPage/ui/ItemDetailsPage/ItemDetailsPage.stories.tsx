// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Product } from 'entities/Product';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import ItemDetailsPage from './ItemDetailsPage';
//
// export default {
//     title: 'pages/ItemDetailsPage',
//     component: ItemDetailsPage,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof ItemDetailsPage>;
//
// const product : Product = {
//     id: '1',
//     itemName: 'Nudeln',
//     number: 16,
//     category: 'Cereals',
//     storageLocation: 'Fridge',
//     date: '01/12/2026',
// };
//
// const Template: ComponentStory<typeof ItemDetailsPage> = (args) => <ItemDetailsPage {...args} />;
//
// export const Normal = Template.bind({});
// Normal.args = {};
// Normal.decorators = [StoreDecorator({
//     productDetails: {
//         data: product,
//     },
// })];
//
// export const Loading = Template.bind({});
// Loading.args = {};
// Loading.decorators = [StoreDecorator({
//     productDetails: {
//         isLoading: true,
//     },
// })];
//
// export const Error = Template.bind({});
// Error.args = {};
// Error.decorators = [StoreDecorator({
//     productDetails: {
//         error: 'error',
//     },
// })];
