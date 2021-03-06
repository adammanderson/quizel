import React from 'react';
import Navigator from '@features/Navigator/Navigator';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return (
    <div className="antialiased text-gray-800">
      <Navigator />
      {children}
    </div>
  );
}
