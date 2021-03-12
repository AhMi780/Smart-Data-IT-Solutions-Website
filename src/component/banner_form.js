export default function Banner() {
  return (
    <div className="banner_form ps-relative bs-bb mb-20">
      <div className="container_banner bs-bb">
        <div className="d-flex w-100">
          <div className="flex-0-0-50 bs-bb pr-15 pl-15">
            <div className="banner_heading bs-bb">
              <h3 className="banner_heading_title mb-30 text-white">
                Satisfied Users Over The Globe
              </h3>
            </div>
            <p className="banner_desc text-white">
              If you’re looking for a rewarding career and the chance to make an
              impact, you’ve come to the right place. We will transform your
              business through our techniques!
            </p>
          </div>
          <div className="flex-0-0-50 bs-bb pr-15 pl-15">
            <div className="contact_panel bs-bb">
              <div className="d-flex flex-column">
                <div className="panel_heading bs-bb">
                  <h4 className="panel_title mb-20 text-blue">
                    Request A Quote
                  </h4>
                  <p className="panel_desc text-grey mb-30">
                    Our deep pool of certified engineers and IT staff are ready
                    to help you to keep your IT business safe & ensure high
                    availability.
                  </p>
                </div>
                <div className="panel_input_box d-flex w-100 justify-between flex-wrap">
                  <div className="panel_input mb-30 bs-bb flex-47">
                    <input
                      className="input-box bs-bb ol-none"
                      id="contactName"
                      type="text"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="panel_input mb-30 bs-bb flex-47">
                    <input
                      className="input-box bs-bb ol-none"
                      id="Email"
                      type="text"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div className="panel_input_box d-flex w-100 justify-between flex-wrap">
                  <div className="panel_input mb-30 bs-bb flex-47">
                    <input
                      className="input-box bs-bb ol-none"
                      id="Inquiry"
                      type="text"
                      placeholder="Inquiry"
                    ></input>
                  </div>
                  <div className="panel_input mb-30 bs-bb flex-47">
                    <input
                      className="input-box bs-bb ol-none"
                      id="Phone"
                      type="text"
                      placeholder="Phone"
                    ></input>
                  </div>
                </div>
                <div className="panel_detail_box mb-30 bs-bb">
                  <textarea
                    placeholder="Additional Details!"
                    id="contact-message"
                    className="panel-detail bs-bb w-100 ol-none"
                  ></textarea>
                </div>
                <div className="accept_privacy mb-20 d-flex item-center">
                  <input
                    className="check-box"
                    id="check_box"
                    type="checkbox"
                  ></input>
                  <label className="p-5 text-grey">
                    I accept the privacy and terms.
                  </label>
                </div>
                <button className="form_btn text-white bg-green bs-bb ol-none">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
