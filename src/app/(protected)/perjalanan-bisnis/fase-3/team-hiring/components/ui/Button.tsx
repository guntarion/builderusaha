import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, type = 'button', className = '', onClick }: ButtonProps) {
  return (
    <button type={type} className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
