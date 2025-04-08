import { render, screen } from "@testing-library/react";
import About from "./about";

describe('About', () => {
    test('Given the about page, then it should render the page and its essential elements', () => {
        render(<About />);
        const pageTestId = screen.getByTestId('about-page');
        const heading = screen.getByRole('heading', { level: 1});
        const howItWorksSection = screen.getByTestId('how-it-works-section');;

        expect(pageTestId).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(howItWorksSection).toBeInTheDocument();

    });
});