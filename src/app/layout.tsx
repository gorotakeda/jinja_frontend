'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './features/common/header/components/header';
import { useAuth } from './repository/authLogin/hooks';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = useAuth();
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {isAuthenticated && <Header />}
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
