import Slate from "components/tabs/Slates";
// import Head from "next/head";
import React, { Fragment } from "react";
import "../styles/business.module.scss";
import Link from "next/link";
import Testimonials from "components/Testimonials";
import Slider from "components/Slider";
import Pricing from "components/Pricing";

const Businessname = () => {
  return (
    <Fragment>
      <div className="business">
        <div className="container-fluid business-main d-flex align-items-center justify-content-center">
          <h1 className="text-light text-center">Business Formalizaition</h1>
        </div>
        <div className="container">
          {" "}
          <Slate />
        </div>
        <div className="container">
          <div className="heading text-center">
            <p className="sub-head mt-5"> some samples</p>
            <h2 className="text-center">Some completed tasks</h2>
            <Slider />
          </div>
        </div>
        <div className="container">
          <div className="heading text-center">
            <p className="sub-head"> Pricing</p>
            <h2 className="text-center">our friendly prices</h2>
          </div>
        </div>
        <div className="container">
          <div className="heading text-center"></div>
        </div>
        <div className="container">
          <div className="heading text-center">
            <p className="sub-head"> Pricing</p>
            <h2 className="text-center">our friendly prices</h2>
          </div>
          <div className="row ">
            <Pricing />
          </div>
          <div className="container text-center">
            <Link href="">
              <a>special packages</a>
            </Link>
          </div>
          <div className="mt-5">
            <Testimonials />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Businessname;
