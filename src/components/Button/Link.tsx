type LinkProps = React.ComponentPropsWithoutRef<'a'>;

export const Link = (props: LinkProps) => {
  const { children, ...rest } = props;
  return (
    <>
      <a
        {...rest}
        className="hover:underline underline-offset-1 text-gray-300 hover:text-gray-100"
      >
        {children}
      </a>
    </>
  );
};
