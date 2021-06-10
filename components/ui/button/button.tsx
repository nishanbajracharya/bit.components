import React from 'react';

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
  /**
   * a text to be rendered in the component.
   */
  text?: string;
  /**
   * children to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * class names for the button
   */
  className?: string | string[];
};

export function Button({ text, children, className, ...props }: ButtonProps) {
  const classes = Array.isArray(className) ? className.join(' ') : className;

  return (
    <button {...props} className={classes}>
      {children || text}
    </button>
  );
}
