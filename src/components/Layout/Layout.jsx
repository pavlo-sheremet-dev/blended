import { Button } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div className=" bg-gradient-to-b from-orangeMy from-3% via-pinkMy purplePaleMy  to-purpleMy to-99.9%">
      <div className="container ">
        <nav className="flex gap-10 text-xl mb-10">
          <Button to="/">Home</Button>
          <Button to="movies">Movies</Button>
        </nav>
        <Suspense fallback={<div>loading</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default Layout;
