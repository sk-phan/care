import { render, screen, waitFor } from '@testing-library/react';
import NavBar from '@/components/common/nav-bar'; // Adjust path as needed
import { describe, expect, test, vi } from 'vitest';  // to mock hooks and other imports

vi.mock('next/navigation', () => ({
    __esModule: true,
    usePathname: () => `/en/register`,
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn()
    }),
    useSearchParams: () => ({ get: () => {} }),
    useServerInsertedHTML: vi.fn()
}));

vi.mock('@/app/i18n', () => ({
    useTranslation: vi.fn(() => ({ t: (key: string) => key })),
}));

vi.mock('@/app/i18n/use-locale', () => ({
    __esModule: true,
    default: () => ({
        locale: 'en',
}),
}));

describe('NavBar',  () => {
    test('Given a navigation, then should render correctly with all nav elements',async  () => {

        render(<NavBar />);
            
        const logoText = await waitFor(() => screen.queryByText('Care'));
        const registerButton = await waitFor(() => screen.findByText('List an item'));

        expect(logoText).toBeDefined();
        expect(registerButton).toBeDefined();
    });

    test('does not render NavBar on the register page', async () => {

        render(<NavBar />);

        await waitFor(() => expect(screen.queryByText('Care')).toBeNull());
    });
});
