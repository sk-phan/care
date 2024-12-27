'use client';
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/mui/theme';

import { NotificationProvider } from '@/stores/notification/notification-context';
import StoreProvider from '../store-provider';
import ReactQueryProvider from '../react-query-provider';

export function Providers({ children } : { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <ReactQueryProvider>
                <StoreProvider>
                    <NotificationProvider>
                        {children}
                    </NotificationProvider>
                </StoreProvider>
            </ReactQueryProvider>
        </ThemeProvider>
    );
}