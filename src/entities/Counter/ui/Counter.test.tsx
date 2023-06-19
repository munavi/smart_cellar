import { screen, waitFor } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter test', () => {
    const initialState: StateSchema = { counter: { value: 42 } };
    test('render test', () => {
        componentRender(<Counter />, { initialState });
        expect(screen.getByTestId('value-title')).toHaveTextContent('42');
    });
    test('increment test', async () => {
        componentRender(<Counter />, { initialState });
        userEvent.click(screen.getByTestId('increment-btn'));
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('43');
        });
    });
    test('decrement test', async () => {
        componentRender(<Counter />, { initialState });
        userEvent.click(screen.getByTestId('decrement-btn'));
        await waitFor(() => {
            expect(screen.getByTestId('value-title')).toHaveTextContent('41');
        });
    });
});
