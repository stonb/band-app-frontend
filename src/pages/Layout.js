import { Outlet, Link } from "react-router-dom";

import '../css/navbar.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/band">Bands</Link>
          </li>
          <li>
            <Link to="/album">Albums</Link>
          </li>
          <li>
            <Link to="/member">Members</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;


<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right"><a class="active" href="#about">About</a></li>
</ul>