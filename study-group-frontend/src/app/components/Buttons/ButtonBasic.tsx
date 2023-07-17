'use client';

import React from 'react';
import { ButtonProps } from '@/types/components/button';

export const ButtonBasic = ({
  disabled = false,
  color = 'info',
  variant = 'contained',
  size = 'medium',
  ...props
}: ButtonProps) => {
  const [buttonStyles, setButtonStyles] = React.useState<string[]>([
    'btn',
    `btn-${color}`,
  ]);
  React.useCallback(() => {
    if (variant === 'outline') buttonStyles.push('btn-outline');
    if (size !== 'medium') buttonStyles.push(`btn-${size}`);
    setButtonStyles(buttonStyles);
  }, [buttonStyles, variant, size]);

  return (
    <>
      <button
        disabled={disabled}
        className={buttonStyles.join(' ')}
        onClick={props.onClickButton}
      >
        {props.startIcon ? props.startIcon : null}
        {props.buttonText}
      </button>
    </>
  );
};
