import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
});
//     test('increment test', async () => {
//         componentRender(<Counter />, { initialState });
//         userEvent.click(screen.getByTestId('increment-btn'));
//         await waitFor(() => {
//             expect(screen.getByTestId('value-title')).toHaveTextContent('43');
//         });
//     });
//     test('decrement test', async () => {
//         componentRender(<Counter />, { initialState });
//         userEvent.click(screen.getByTestId('decrement-btn'));
//         await waitFor(() => {
//             expect(screen.getByTestId('value-title')).toHaveTextContent('41');
//         });
//     });
//
