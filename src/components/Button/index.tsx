import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({
  className,
  children,
  iconLeft,
  iconRight,
  disabled,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const baseClasses =
    'rounded-xl px-5 py-2 font-medium flex items-center gap-2 hover:bg-opacity-80';

  const variantClasses = {
    primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
    secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
}
