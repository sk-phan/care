import { render, screen } from "@testing-library/react";
import InstructionSection, { steps } from "./instruction-section";

describe('InstructionSection', () => {
    test('Given the instruction section, when it is rendered, then it should display the steps', () => {
        render(<InstructionSection />)

        steps.forEach(step => {
            const stepTitle = screen.getByText(step.title);
            const stepDescription = screen.getByText(step.description);

            expect(stepTitle).toBeInTheDocument();
            expect(stepDescription).toBeInTheDocument();

        })
    })
});