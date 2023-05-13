// import "@styles/globalcss";

import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="navbarContainer">
        {/* container section */}
        {/* logo */}
        <div className="logo">
          {/* <h2>Blogpea</h2> */}
          <Image src="/assets/blogger.png" width={80} height={80} />
        </div>
        {/* menus */}
        <div className="menus">
          <li className="lists">Home</li>
          {/* <li className="lists">About Us</li> */}
          <li className="lists">Posts</li>
          <li className="lists">Blog</li>
          {/* <li className="lists">Contact</li> */}
        </div>
        {/* login & register */}
        <div className="authButtons">
          <button>Login</button>
          <button className="register">Register</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
