import { render, screen } from '@testing-library/react';
import FormHelperText from './form-helper-text';

describe('FormHelperText', () => {
    test('Given an error message "Required", then it should renders it correctly', () => {
        render(<FormHelperText message='Required' />);
        const linkElement = screen.getByText(/Required/i);
        expect(linkElement).toBeInTheDocument();
    });
}); 
