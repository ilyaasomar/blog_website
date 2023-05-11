// import "@styles/globalcss";

const Navbar = () => {
  return (
    <>
      <nav className="navbarContainer">
        {/* container section */}
        {/* logo */}
        <div className="logo">
          <h2>Logo</h2>
        </div>
        {/* menus */}
        <div className="menus">
          <li className="lists">Home</li>
          <li className="lists">About Us</li>
          <li className="lists">Pricing</li>
          <li className="lists">Blog</li>
          <li className="lists">Contact</li>
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
