import React from "react";
import "../styles/business.module.scss";
const Pricing = () => {
  return (
    <div>
      <div className="row justify-content-between text-white">
        <div className="col-md-3 price py-2 mb-2">
          <div className="d-flex flex-column justify-content-center ">
            {/* <h3 className="me-2">ICON</h3> */}
            <div className="align-self-center">
              {" "}
              <h5 className="mb-0">Business Name</h5>
              {/* <p className="mt-0">(Ventures / enterprise)</p> */}
              <h4> ₦20,000</h4>
            </div>

            <hr />
            <div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>CAC certificate</p>
                </div>
              </div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>Status Report</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid mt-5">
            <button
              type="button"
              className="btn btn-light align-self-center d-block"
            >
              order now
            </button>
          </div>
        </div>

        <div className="col-md-3 price py-2 mb-2">
          <div className="d-flex flex-column justify-content-center ">
            {/* <h3 className="me-2">ICON</h3> */}
            <div className="align-self-center">
              {" "}
              <h5 className="mb-0">Limited Liability</h5>
              {/* <p className="mt-0">(Ventures / enterprise)</p> */}
              <h4> ₦50,000</h4>
            </div>

            <hr />
            <div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>CAC certificate</p>
                </div>
              </div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>Status Report</p>
                </div>
              </div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>Drafting of all Legal Documents</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light align-self-center d-block"
            >
              order now
            </button>
          </div>
        </div>

        <div className="col-md-3 price py-2 mb-2">
          <div className="d-flex flex-column justify-content-center ">
            {/* <h3 className="me-2">ICON</h3> */}
            <div className="align-self-center">
              {" "}
              <h5 className="mb-0">Incoporated Trustee</h5>
              {/* <p className="mt-0">(Ventures / enterprise)</p> */}
              <h4> ₦120,000</h4>
            </div>

            <hr />
            <div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>CAC certificate</p>
                </div>
              </div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>Status Report</p>
                </div>
              </div>
              <div className="benefit">
                <div className="d-flex ">
                  <i className="fas fa-check-circle me-2  mt-1"></i>
                  <p>Drafting of all Legal Documents</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-light align-self-center d-block"
            >
              order now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
