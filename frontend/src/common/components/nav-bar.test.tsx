import { render, screen, waitFor } from '@testing-library/react';
import NavBar from '@/common/components/nav-bar'; // Adjust path as needed
import { describe, expect, test, vi } from 'vitest';  // to mock hooks and other imports

vi.mock('next/navigation', () => ({
    __esModule: true,
    usePathname: () => `/en/`,
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn()
    }),
    useSearchParams: () => ({ get: () => {} }),
    useServerInsertedHTML: vi.fn()
}));

vi.mock('@/app/i18n', () => ({
    useTranslation: vi.fn(() => ({
        t: (key: string) => {
            const translations:  Record<string, string> = {
                'nav-bar.home': 'Home',
                'nav-bar.items': 'Items',
                'nav-bar.about': 'About',
                'nav-bar.list-an-item': 'List an item',
            };
            return translations[key] || key;
        },
    })),
}));


vi.mock('@/app/i18n/use-locale', () => ({
    __esModule: true,
    default: () => ({
        locale: 'en',
}),
}));


describe('NavBar',  () => {

    test('Given a navigation in english, then should render correctly with all nav elements', async () => {

        render(<NavBar />);

        const logoText = await waitFor(() => screen.findByText('Care'));
        const homeLink = await waitFor(() => screen.findByText('Home'));
        const itemsLink = await waitFor(() => screen.findByText('Items'));
        const aboutLink = await waitFor(() => screen.findByText('About'));

        const registerButton = await waitFor(() => screen.findByText('List an item'));
    
        expect(logoText).toBeDefined();
        expect(homeLink).toBeDefined();
        expect(itemsLink).toBeDefined();
        expect(aboutLink).toBeDefined();

        expect(registerButton).toBeDefined();
    });
});
