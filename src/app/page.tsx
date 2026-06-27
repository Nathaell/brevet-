'use client';

import { ProgressProvider } from '../context/ProgressContext';
import { Dashboard } from '../components/Dashboard';

export default function Home() {
  return (
    <ProgressProvider>
      <Dashboard />
    </ProgressProvider>
  );
}
