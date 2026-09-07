import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from './routes/index';
import { Toaster } from './components/ui/sonner';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
      <Toaster />
    </QueryClientProvider>
  );
}
