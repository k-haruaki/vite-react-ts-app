import { Link, useResolvedPath, useMatch, To } from 'react-router-dom';

const CustomLink = ({
  to,
  children,
  ...props
}: {
  to: To;
  children: React.ReactNode;
}) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link style={{ color: match ? 'blue' : '' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
