import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TapOne | Cashless Event Payments',
  description: 'Cashless wristband and QR wallet payments for events, concessions, schools, churches, and venues.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
