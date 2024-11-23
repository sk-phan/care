'use client';
import { NotificationProvider } from '@/stores/notification/notification-context';
import StoreProvider from '../StoreProvider';
import ReactQueryProvider from '../ReactQueryProvider';

export function Providers({ children } : { children: React.ReactNode }) {
    return (
        <ReactQueryProvider>
            <StoreProvider>
                <NotificationProvider>
                    {children}
                </NotificationProvider>
            </StoreProvider>
        </ReactQueryProvider>
    );
}