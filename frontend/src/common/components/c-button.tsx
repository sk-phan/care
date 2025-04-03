"use client";

import React from 'react';

type ButtonVariant = 'fill' | 'outline' | 'text';
type ButtonColor = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  children: React.ReactNode;
}

const colorClasses: { [key in ButtonColor]: string } = {
  primary: 'bg-teal-900 text-white hover:bg-teal-950 hover:border-blue-700',
  secondary: 'bg-black text-white border-0 hover:bg-gray-700 hover:border-gray-700',
  danger: 'bg-red-500 text-white border-red-500 hover:bg-red-700 hover:border-red-700',
};

const variantClasses: { [key in ButtonVariant]: (color: string) => string } = {
  fill: (color) => `${color} py-2 rounded-full`,
  outline: (color) => `border ${color} text-${color.split(' ')[0]} bg-transparent hover:bg-${color.split(' ')[0].split('-')[1]}-100 px-4 py-2 rounded-full`,
  text: (color) => `text-${color.split(' ')[0]} bg-transparent hover:bg-${color.split(' ')[0].split('-')[1]}-100 rounded-full`,
};

const Button: React.FC<ButtonProps> = ({ variant = 'fill', color = 'primary', children, className, ...props }) => {
  const colorClass = colorClasses[color];
  const variantClass = variantClasses[variant](colorClass);
  return (
    <button
      className={`${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
