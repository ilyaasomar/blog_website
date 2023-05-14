// import "@styles/globalcss";
"use client";
import { useEffect, useState } from "react";
import { signIn, signout, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { FaList } from "react-icons/fa";
const Navbar = () => {
  const { data: session } = useSession();
  const [openMenu, setMenu] = useState(false);
  const [providers, setProviders] = useState();

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  console.log(providers);
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
          <li className="lists">Posts</li>
          <li className="lists">Blog</li>
        </div>
        {/* login and signout */}
        {session?.user ? (
          <div className="authButtons">
            <button className="login">Logout</button>
          </div>
        ) : (
          <div className="authButtons">
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  className="login"
                  key={provider.key}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Login
                </button>
              ))}
          </div>
        )}

        {/* Mobile Navigation */}
        <div className="mobile_navigation">
          <FaList
            className="w-7 h-7"
            onClick={() => setMenu((prev) => !prev)}
          />
        </div>
        {openMenu && (
          <div className="dropdown">
            <li className="lists">Home</li>
            <li className="lists">Posts</li>
            <li className="lists">Blog</li>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
