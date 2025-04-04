'use client';
import { ThemeProvider } from '@mui/material';
import theme from '@/common/styles/mui/theme';

import { NotificationProvider } from '@/common/stores/notification/notification-context';
import StoreProvider from '../store-provider';
import ReactQueryProvider from '../react-query-provider';
import { ReactNode } from 'react';

export function Providers({ children } : { children: ReactNode }) {
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