/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Script from "next/script";
import Headercomp from "../components/Headercomp";

import styles from "../styles/Home.module.css";
import Carousel from "components/Carousel";
import CssHeader from "components/CssHeader";
import Header from "components/Header";
import Accordion from "components/Accordion";
import Testimonials from "components/Testimonials";
import Footer from "components/Footer";
// import styled from "styled-components";

export default function Home() {
  return (
    <Fragment>
     {/*    <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossOrigin="anonymous"
      ></Script> */}
      <div>
        <Head>
          <title>Create Next App</title>
          {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"></link> */}
        </Head>
        {/* umt #70B765 color: " #EABE0F" */}
        {/* <CssHeader />
         */}
        {/* <Headercomp /> */}
        {/* <CssHeader />
         */}
        <main>
          {/* <Header /> */}

          {/* <div className="banner ">
              <div className=" home  d-flex align-items-center justify-content-center">
                <div className="container d-flex align-items-center justify-content-between  ">
                  <div className="row align-items-center">
                    <img
                      src="/undraw_creative_team_r90h-removebg-preview.png"
                      alt=""
                      // width={"70%"}
                      className="col-md-6"
                    />
                    <h1 className=" text-light text-center col-md-6 ">
                      We are a creative brand specialize in securing your
                      business future
                    </h1>
                  </div>
                </div>
              </div>
            </div> */}

          <Carousel />
        </main>
        <section id="services" className="services">
          <div className="container py-5 text-center">
            <p className="text-center sub-head">Our Services</p>{" "}
            <h2 className="text-center w-75" style={{ margin: "auto auto" }}>
              The various services we provide to make your business more
              powerful
            </h2>
            {/* <h1>ghd</h1> */}
            <div className="  ">
              <div className="row mt-5 d-flex align-items-center justify-content-center">
                <div className="col-md-3">
                  <div className="card service-card mb-4 px-3">
                    <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                      <div className="circle d-flex justify-content-center align-items-center">
                        <i className="fas fa-briefcase icon"></i>
                      </div>
                      {/* <img src="..." className="card-img-top" alt="..."></img> */}
                      <h5 className="card-title mt-4 mb-3">
                        Business Formalization
                      </h5>
                      <p className="card-text text-center ">
                        We help develop company websites to be more professional
                        and attractive
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#F3F4F6" }}
                      >
                        <i className="fas fa-arrow-right icon2 text-primary"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card service-card mb-4  px-3">
                    <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                      {/* <img src="..." className="card-img-top" alt="..."></img> */}
                      {/* <i className="fa-solid fa-display text-primary"></i> */}
                      <div className="circle d-flex justify-content-center align-items-center circle2">
                        {" "}
                        <i className="fas fa-desktop icon "></i>
                      </div>
                      <h5 className="card-title mt-4 mb-3">Web Development</h5>
                      <p className="card-text text-center ">
                        We help develop company websites to be more professional
                        and attractive
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#F3F4F6" }}
                      >
                        <i className="fas fa-arrow-right icon2  text-primary"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card service-card mb-4  px-3">
                    <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                      {/* <img src="..." className="card-img-top" alt="..."></img> */}
                      {/* <i className="fas fa-users-class icon"></i> */}
                      <div className="circle d-flex justify-content-center align-items-center">
                        <i className="fas fa-school icon"></i>
                      </div>
                      <h5 className="card-title mt-4 mb-3">ICT Training</h5>
                      <p className="card-text">
                        We help develop company websites to be more professional
                        and attractive yeilding more sales
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        style={{ backgroundColor: "#F3F4F6" }}
                      >
                        <i className="fas fa-arrow-right icon2  text-primary"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="row mt-4 d-flex align-items-center justify-content-center">
                  <div className="col-md-3">
                    <div className="card service-card  px-3">
                      <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                        <div className="circle d-flex justify-content-center align-items-center circle2">
                          <i className="fas fa-pen-nib icon"></i>
                        </div>
                        {/* <img src="..." className="card-img-top" alt="..."></img> */}
                        <h5 className="card-title mt-4 mb-3">Design</h5>
                        <p className="card-text text-center ">
                          We help develop company websites to be more
                          professional and attractive yeilding more sales
                        </p>
                        <a
                          href="#"
                          className="btn btn-primary"
                          style={{ backgroundColor: "#F3F4F6" }}
                        >
                          <i className="fas fa-arrow-right icon2  text-primary"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card service-card px-3">
                      <div className="card-body d-flex flex-column  justify-content-center align-items-center">
                        <div className="circle d-flex justify-content-center align-items-center">
                          <i className="fas fa-briefcase icon"></i>
                        </div>
                        {/* <img src="..." className="card-img-top" alt="..."></img> */}
                        <h5 className="card-title mt-4 mb-3">
                          Business Formalization (UK/USA)
                        </h5>
                        <p className="card-text text-center ">
                          We help develop company websites to be more
                          professional
                        </p>
                        <a
                          href="/businessname"
                          className="btn btn-primary nav-link"
                          style={{ backgroundColor: "#F3F4F6" }}
                        >
                          <i className="fas fa-arrow-right icon2 text-primary"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="profile">
          <div className="py-5" style={{ backgroundColor: " #F9F9FD" }}>
            <div className="container">
              <p className="text-center sub-head">Our Documentation</p>{" "}
              <h2
                className="text-center"
                //  style={{ fontSize: "2.625rem" }}
              >
                see our profile
              </h2>
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card d-flex flex-column  justify-content-center align-items-center py-3 px-2 pro-card">
                          <h1
                            className="mt-2"
                            style={{ color: " #70b765", fontWeight: "900" }}
                          >
                            50<sup>+</sup>
                          </h1>
                          <p className="text-center mt-3">
                            We have more than customers
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="card mt-4 d-flex flex-column  justify-content-center align-items-center py-3 px-2 pro-card">
                          <h1
                            className="mt-2"
                            style={{ color: " #EABE0F", fontWeight: "900" }}
                          >
                            57<sup>+</sup>
                          </h1>
                          <p className="text-center mt-3">
                            Projects we have completed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis asperiores ad voluptatum laborum? Voluptate eaque omnis
                    at facere? Iure tempora animi autem tenetur saepe magni
                    velit esse ab nam! Asperiores quae veniam cupiditate iste
                    officia, adipisci soluta. Deserunt porro iusto aliquid omnis
                    corrupti corporis impedit voluptas, beatae eum dolores
                    sapiente?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="works">
          <div className="container py-5">
            <div className="heading mb-5">
              <p className="text-center sub-head">
                some of our great customers
              </p>{" "}
              <h2
                className="text-center"
                //  style={{ fontSize: "2.625rem" }}
              >
                some compnaies we have worked with
              </h2>
            </div>
            <div className="logos">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 ">
                    {" "}
                    <p className="logo-s">festive creation</p>{" "}
                  </div>
                  <div className="col-sm-3 ">
                    {" "}
                    <p className="logo-s">festive creation</p>{" "}
                  </div>
                  <div className="col-sm-3 ">
                    {" "}
                    <p className="logo-s">festive creation</p>{" "}
                  </div>
                  <div className="col-sm-3 ">
                    {" "}
                    <p className="logo-s">festive creation</p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about ">
          <div className="container aboutus py-5 ">
            <div className="row align-items-center text-light">
              <div className="col-md-4 animate__animated animate__fadeInLeft animate__delay-2s">
                <div>
                  <div>
                    <img
                      src="/undraw_team_work_k-80-m (1).svg"
                      alt=""
                      width={"40%"}
                    />
                  </div>
                  <div>
                    <h3 className="pt-4">Who we are</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-8 ">
                <p className="text  animate__animated animate__fadeInRight animate__delay-2s">
                  {" "}
                  We secure businesses and organization future by legalizing
                  them,using suitable financial models and information &
                  technology that will aid its effiecency hereby enabling them
                  exceed the average year of existence and remain profitable not
                  just to the shareholders but the global community at large.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container py-5">
            <div className="heading">
              <p className="text-center sub-head">frequently asked question</p>{" "}
              <h2
                className="text-center"
                //  style={{ fontSize: "2.625rem" }}
              >
                some questions we have been frequently asked
              </h2>
            </div>
            <div className="accordion">
              <Accordion />
            </div>
          </div>
        </section>
        <section id="testimonials" style={{ backgroundColor: " #F9F9FD" }}>
          <div className="container  py-5">
            <div className="heading mb-4">
              <p className="text-center sub-head">testimonials</p>{" "}
              <h2
                className="text-center"
                //  style={{ fontSize: "2.625rem" }}
              >
                some testimonials from our clients
              </h2>
            </div>
            <div className="mt-5">
              <Testimonials />
            </div>
          </div>
        </section>
        {/* <Footer /> */}
      </div>
      <div>
        {/* <form
          // action=""
          action="https://formsubmit.co/0ca02bd2df5484ecfc8836ec2ef0068f"
          method="POST"
        >
          <div>
            <label htmlFor="name"></label>
            <input type="text" name="name" />
          </div>
          <input type="email" name="" id="" />
          <input type="tel" name="" id="" />
          <button className="contact-form-btn" type="submit" value="Send">
            Submit
          </button>
        </form> */}
      </div>
      <div>
        {/* <form
          // action=""
          action="https://form2mail.ml/form?receiver=oghenekevwe27@gmail.com&subject=any"
          method="POST"
        >
          <div>
            <label htmlFor="name"></label>
            <input type="text" name="name" />
          </div>
          <input type="email" name="" id="" />
          <input type="tel" name="" id="" />
          <button className="contact-form-btn" type="submit" value="Send">
            Submit
          </button>
        </form> */}
      </div>
    </Fragment>
  );
}

// const Wrapper = styled.div``;
