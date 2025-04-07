import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Heading from './heading';

describe('Heading', () => {
    const pageHeading = 'Your unused items can mke a difference';

    test('Given a heading, then it should renders it correctly', () => {
        render(<Heading heading={pageHeading} />);
        
        const heading = screen.getByText(pageHeading);
        expect(heading).toBeInTheDocument();
    });

    test('Given a heading with undefined level, then it should renders the default h1', () => {
        render(<Heading heading={pageHeading} />);
        
        const heading = screen.getByRole('heading', { level: 1});
        expect(heading).toBeInTheDocument();
    });

    test('Given a heading with a specific level, then it should renders the matching heading tag', () => {
        render(<Heading heading={pageHeading} level={2}/>);
        
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
    });

    test('Given a subheading, then it should renders both heading and subheading', () => {
        render(<Heading heading={pageHeading} subHeading='Test subheading' level={2}/>);
        
        const heading = screen.getByRole('heading', { level: 2 });
        const subHeading = screen.getByText('Test subheading');

        expect(heading).toBeInTheDocument();
        expect(subHeading).toBeInTheDocument();
    });
});
