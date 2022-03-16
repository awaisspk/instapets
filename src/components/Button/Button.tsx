import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <>
      <button
        {...rest}
        className="bg-blue-200/20 hover:bg-blue-200/10 active:bg-blue-200/30 text-blue-400 py-2 w-[200px] rounded-xl"
      >
        {children}
      </button>
    </>
  );
};
