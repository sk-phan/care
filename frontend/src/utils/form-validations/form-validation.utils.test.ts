import { isValidEmail } from "./form-validations.utils";

describe('FormValidation', () => {
    describe('isValidEmail', () => {
        test('Given a valid email, then it should return true', () => {
            const result = isValidEmail('care@gmail.com');
            expect(result).toBe(true);
        });

        test('Given an invalid email, then it should return false', () => {
            const result = isValidEmail('test.com');
            expect(result).toBe(false);
        });
    })
});