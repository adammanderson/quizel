import * as React from 'react';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ onClick, children }: IButtonProps): React.ReactElement {
  return (
    <button className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-bold shadow-sm" onClick={onClick} type="button">
      {children}
    </button>
  );
}
