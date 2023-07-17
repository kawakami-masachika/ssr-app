import { ReactNode } from 'react';

export type ButtonProps = {
  buttonText: string;
  variant?: 'contained' | 'outline';
  disabled?: boolean;
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'medium' | 'large';
  color?: 'info' | 'warning' | 'error';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClickButton: () => void;
};
