import React, { ReactNode } from 'react';

export type Props = React.ComponentPropsWithoutRef<"button"> & {
  buttonText: string;
  variant?: 'contained' | 'outline';
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'medium' | 'large';
  color?: 'info' | 'warning' | 'error';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export const ButtonBasic = ({
  disabled = false,
  color = 'info',
  variant = 'contained',
  size = 'medium',
  type = 'submit',
  ...props
}: Props) => {

  const buttonStyles = () => {
    const baseStyles = ['btn', `btn-${color}`]
    if(variant === 'outline') baseStyles.push('btn-outline');
    if(size !== 'medium') baseStyles.push(`btn-${size}`);
    if(props.fullWidth) baseStyles.push(`btn-block`)
    return baseStyles
  };

  return (
    <>
      <button
        disabled={disabled}
        className={buttonStyles().join(' ')}
        onClick={props.onClick}
        type={type}
      >
        {props.startIcon ? props.startIcon : null}
        {props.buttonText}
        {props.startIcon ? props.endIcon : null}
      </button>
    </>
  );
};
