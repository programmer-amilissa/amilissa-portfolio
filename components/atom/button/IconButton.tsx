import React, { ReactNode } from 'react';

const sizeConfig = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
  xl: 'h-8 w-8',
  xl2: 'h-9 w-9',
};

const config = {
  filled: {
    primary:
      'bg-primary-1 hover:bg-modernity-primary-3 rounded-md fill-primary-contrast hover:fill-white',
    secondary: 'bg-primary-2 hover:bg-secondary-dark fill-secondary-contrast',
    neutral: 'bg-text-secondary hover:bg-text-primary fill-text-accent',
    error: 'bg-error-main hover:bg-error-dark fill-primary-contrast',
  },
  outlined: {
    primary:
      'border-primary-1 hover:border-modernity-primary-3 fill-primary-1 hover:fill-modernity-primary-3',
    secondary:
      'border-primary-2 hover:border-secondary-dark fill-primary-2 hover:fill-secondary-dark',
    neutral: 'border-text-primary hover:border-text-primary fill-text-accent ',
    error:
      'border-error-main hover:border-error-dark fill-error-main hover:fill-error-dark',
  },
  text: {
    primary: 'bg-[transparent] fill-primary-1 hover:fill-modernity-primary-3',
    secondary: 'bg-[transparent] fill-secondary-dark hover:fill-secondary-dark',
    neutral: 'bg-[transparent] fill-text-secondary hover:fill-text-primary-1',
    error: 'bg-[transparent] fill-error-main hover:fill-error-dark',
  },
};

export type IconButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
  size?: keyof typeof sizeConfig;
  color?: keyof typeof config.filled;
  variant?: keyof typeof config;
  rounded?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

const IconButton: React.FunctionComponent<IconButtonProps> = (props) => {
  const {
    children,
    onClick,
    size = 'lg',
    className = '',
    variant = 'filled',
    color = 'primary',
    rounded,
    ...others
  } = props;

  return (
    <button
      type="button"
      className={`
        transition-colors
        p-1
        flex 
        justify-center
        items-center
        ${rounded ? 'rounded-[50%]' : 'rounded-sm'}
        cursor-pointer
        ${sizeConfig[size]}
        ${config[variant][color]}
        ${variant === 'outlined' ? '' : ''}
        ${className}

      `}
      onClick={onClick}
      {...others}
    >
      {children}
    </button>
  );
};

export { IconButton };
