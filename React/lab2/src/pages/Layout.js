import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav style={{ margin: "auto" }}>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
