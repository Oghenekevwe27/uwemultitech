import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="nav ">
      <nav className="d-flex justify-content-between align-items-center container ">
        <img
          src="/secondary logo green@4x.png"
          alt=""
          width={"10%"}
          className="logo"
        />
        <ul className="d-flex justify-content-center align-items-center pt-3">
          <li>
            <Link href="/" >
              <a >Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Works</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <button className="btn btn nav-btn">Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
