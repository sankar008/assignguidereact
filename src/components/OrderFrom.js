import React from "react";

const OrderFrom = () => {
  return (
    <>
      <div class="form-column">
        <div
          class="inner-columna wow fadeInRight animated"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div class="color-box"></div>
          <h3 className="mb-3">Place your order here!</h3>

          <div class="trial-form">
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="Email"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    value=""
                    placeholder="Subject/Course Code"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-md-6">
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="Choose Assistant Deadline"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <input
                    type="email"
                    name="email"
                    value=""
                    placeholder="No. Of Pages / Words"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea name="message" placeholder="Choose file"></textarea>
            </div>

            <div class="form-group">
              <button type="submit" class="theme-btn submit-btn">
                <span class="txt">Send now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderFrom;
