import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="container d-flex flex-column align-items-center">
          <div
            className="d-flex flex-column align-items-center w-100 py-5 sub"
            style={{ backgroundColor: "#70B765" }}
          >
            <p className="sub-head text-light">stay updated</p>
            <h2 className="text-light mb-4">Subscribe now</h2>
            <div className="w-50">
              <form action="">
                <div className="input-group mb-3 submail">
                  <input
                    type="email"
                    className="form-control outline-none mail"
                    placeholder="email"
                    aria-label="subemail"
                    aria-describedby="subbutton-addon2"
                  />
                  <button
                    className="btn btn bg-light"
                    type="submit"
                    id="subbutton-addon2"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="text-light text-justify">
                <img
                  src="/Monochrome logo white@4x.png"
                  alt=""
                  width={"50%"}
                  className="logo"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta sed error consequatur eaque suscipit animi tempora
                  adipisci sint dolore quidem.
                </p>
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4 text-light">
              <p className=" foot-sub text-light mt-5">Get in Touch</p>

              <div className="d-flex align-items-center ">
                <div className="elipse2 d-flex align-items-center justify-content-center me-2">
                  <i className="fas fa-map-marker-alt contact-icon"></i>
                </div>
                <div>
                  <p
                    className="mb-0 pb-0"
                    style={{ fontSize: "0.88rem", fontWeight: "bold" }}
                  >
                    Visit Us
                  </p>
                  <address className="mt-0 pt-0 ">
                    <p style={{ fontSize: "0.77rem" }}>
                      {" "}
                      Etim okpoyo close,Off aba road,Port Harcourt
                    </p>
                  </address>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="elipse2 d-flex align-items-center justify-content-center me-2">
                  <i className="fas fa-phone-alt contact-icon"></i>
                </div>
                <div>
                  <p
                    className="mb-0 pb-0"
                    style={{ fontSize: "0.88rem", fontWeight: "bold" }}
                  >
                    Call Us
                  </p>
                  <div className="mt-0 pt-0">
                    <Link href="tel:+2348134843836">
                      <a style={{ fontSize: "0.77rem" }}>08134843836</a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="elipse2 d-flex align-items-center justify-content-center me-2">
                  <i className="fas fa-envelope contact-icon"></i>
                </div>
                <div>
                  <p
                    className="mb-0 pb-0"
                    style={{ fontSize: "0.88rem", fontWeight: "bold" }}
                  >
                    Mail Us
                  </p>
                  <div className="mt-0 pt-0 ">
                    <Link href="mailto:">
                      <a style={{ fontSize: "0.77rem" }}>
                        uwemultitech@gmail.com
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-100 line" />
        </div>
        <div className="container">
          <div className="row text-light">
            <div className="col-md-3">
              <p>© 2022 Uwe Multi Tech</p>
            </div>

            <div className="col-md-5">
              <div className="d-flex align-items-center justify-content-center">
                <Link href="">
                  <a className="me-2">Home</a>
                </Link>
                <Link href="">
                  <a className="me-2">Works</a>
                </Link>
                <Link href="">
                  <a className="me-2">Service</a>
                </Link>
                <Link href="">
                  <a className="">Contact</a>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <div className="social me-2">
                  <div className="elipse4 d-flex align-items-center justify-content-center">
                    <i className="fab fa-facebook-f social-icon"></i>
                  </div>
                </div>
                <div className="social me-2">
                  <div className="elipse4 d-flex align-items-center justify-content-center">
                    <i className="fab fa-instagram social-icon"></i>
                  </div>
                </div>
                <div className="social me-2">
                  <div className="elipse4 d-flex align-items-center justify-content-center">
                    <i className="fab fa-twitter social-icon"></i>
                  </div>
                </div>
                <div className="social">
                  <div className="elipse4 d-flex align-items-center justify-content-center">
                    <i className="fab fa-linkedin-in social-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
