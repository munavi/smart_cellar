// import { Decorator } from '@storybook/react';
// import { BrowserRouter } from 'react-router-dom';
//
// const RouterDecorator: Decorator = (Story) => (
//     <BrowserRouter>
//         <Story />
//     </BrowserRouter>
// );
//
// export default RouterDecorator;

import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        <>{story()}</>
    </BrowserRouter>
);

export default RouterDecorator;
