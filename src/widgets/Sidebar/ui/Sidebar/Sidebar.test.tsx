import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTransaltion';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toogle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
