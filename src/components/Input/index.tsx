import React, { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function Input({ className, iconLeft, iconRight, ...rest }: InputProps) {
  const baseClasses = 'px-4 border-zinc-800 rounded-lg flex items-center gap-2';

  return (
    <div className={`${baseClasses} ${className}`}>
      {iconLeft && <span>{iconLeft}</span>}
      <input
        className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
        {...rest}
      />
      {iconRight && <span>{iconRight}</span>}
    </div>
  );
}
