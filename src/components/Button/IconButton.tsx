import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const IconButton = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        className={
          'p-[0.4em] rounded-lg hover:bg-blue-200/20 dark:hover:bg-blue-200/10'
        }
      >
        {children}
      </button>
    </>
  );
};
