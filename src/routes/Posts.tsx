import { Outlet } from 'react-router-dom';

const Posts = () => {
  return (
    <>
      <h2>Posts</h2>
      <Outlet />
    </>
  );
};

export { Posts };
