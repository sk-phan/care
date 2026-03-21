import { render, screen } from "@testing-library/react";
import InstructionSection from "./instruction-section";

describe('InstructionSection', () => {
    test('Given the instruction section, when it is rendered, then it should display the steps', () => {
        render(<InstructionSection />)
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
        expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3);
    })
});