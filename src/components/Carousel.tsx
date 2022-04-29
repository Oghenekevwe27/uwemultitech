/* eslint-disable @next/next/no-img-element */
import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <div className="banner ">
              <div className=" home  d-flex align-items-center justify-content-center">
                <div className="container d-flex align-items-center justify-content-between  ">
                  <div className="row align-items-center px-3">
                    <h1 className=" text-light text-left col-md-6 animate__animated animate__bounceInDown pe-5 pb-5">
                      We are a creative brand <br /> specialize in{" "}
                      <span className="h1" style={{ color: " #EABE0F" }}>
                        securing
                      </span>{" "}
                      your business future
                    </h1>
                    <img
                      // src="/undraw_creative_team_r-90-h.svg"
                      src="/amico.png"
                      alt=""
                      // width={"200%"}
                      // className="col-md-6  animate__animated animate__fadeInLeftBig animate__fadeOutLeftBig animate__delay-2s  "
                      className={`col-md-6  a animate__animated ps-5 pt-5${
                        "animate__delay-s "
                          ? "animate__bounceInUp"
                          : "animate__fadeOutLeftBig "
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="banner ">
              <div className=" home  d-flex align-items-center justify-content-center">
                <div className="container d-flex align-items-center justify-content-between  ">
                  <div className="row align-items-center px-3">
                    <h1 className=" text-light text-left col-md-6 animate__animated animate__bounceInDown pe-5 pb-5">
                      We take your business to the{" "}
                      <span className="h1" style={{ color: " #EABE0F" }}>
                        globe
                      </span>{" "}
                      by giving it an online presence
                    </h1>
                    <img
                      src="/pana.png"
                      alt=""
                      // width={"70%"}
                      className={`col-md-6  a animate__animated  ps-5  pt-5 ${
                        "animate__delay-5s "
                          ? "animate__bounceInUp"
                          : "animate__fadeOutLeftBig "
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div> */}
          </div>
          <div className="carousel-item">
            <div className="banner ">
              <div className=" home  d-flex align-items-center justify-content-center">
                <div className="container d-flex align-items-center justify-content-between  ">
                  <div className="row align-items-center px-3">
                    <h1
                      className=" text-left col-md-6 animate__animated animate__bounceInDown pe-5 text-light pb-5"
                      // style={{ fontSize: "3.5rem" }}
                    >
                      {/* Lets help you build a <br /> business that last */}
                      Make your business <br />
                      <span className="h1" style={{ color: " #EABE0F" }}>
                        more powerful
                      </span>{" "}
                      with us
                    </h1>

                    <img
                      src="/amico2.png"
                      alt=""
                      // width={"70%"}
                      className={`col-md-6  a animate__animated  ps-5 pt-5 ${
                        "animate__delay-s "
                          ? "animate__bounceInUp"
                          : "animate__fadeOutLeftBig "
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
