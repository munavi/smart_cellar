// import React from 'react';
// import { ComponentMeta, ComponentStory } from '@storybook/react';
// import { Product } from 'entities/Product';
// import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
// import { ProductDetails } from './ProductDetails';
//
// export default {
//     title: 'entities/ItemDetails',
//     component: ProductDetails,
//     argTypes: {
//         backgroundColor: { control: 'color' },
//     },
// } as ComponentMeta<typeof ProductDetails>;
//
// const item : Product = {
//     id: '1',
//     itemName: 'Nudeln',
//     number: 16,
//     category: 'Milch',
//     storageLocation: 'Fridge',
//     date: '01/12/2026',
// };
//
// const Template: ComponentStory<typeof ProductDetails> = (args) => <ProductDetails {...args} />;
//
// export const Normal = Template.bind({});
// Normal.args = {};
// Normal.decorators = [StoreDecorator({
//     productDetails: {
//         data: item,
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
