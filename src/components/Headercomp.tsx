/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
// import styled from "styled-components";

const Headercomp = () => {
  return (
    <header>
      <nav className=" container-fluid  nav">
        <div className="d-flex container align-center  ">
          <img
            src="/Monochrome logo white@4x.png"
            className="me-4"
            alt=""
            width={"10%"}
          />
          <ul className="d-flex  justify-content-between align-items-center align-self-center w-75">
            <li>
              <Link href="/">
                <a>Homne</a>
              </Link>
            </li>
            <li>
              <Link href="/"> About</Link>
            </li>
            <li>
              <Link href="/"> What we do</Link>
            </li>
            <li>
              <Link href="/"> Pricing</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Headercomp;
// const Header = styled.header``;
