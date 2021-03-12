import FooterLogo from "./../assets/images/logo-dark.png";
export default function Footer() {
  return (
    <div className="footer bs-bb bg-white">
      <div className="footer_primary bs-bb">
        <div className="container bs-bb">
          <div className="footer_content d-flex flex-wrap">
            <div className="footer_logo flex-25 pl-15 pr-15 bs-bb">
              <img className="mb-30" src={FooterLogo} alt="logo" />
            </div>
            <div className="footer_widget pl-15 pr-15 mb-30 flex-16 bs-bb">
              <h6 className="footer_widget_title text-blue">Company</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="f" className="no-underline text-grey">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      News & Media
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget pl-15 pr-15 mb-30 flex-16 bs-bb">
              <h6 className="footer_widget_title text-blue">Solutions</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="f" className="no-underline text-grey">
                      IT Management
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Cyber Security
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      IT Consulting{" "}
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Software Dev
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      IT Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget pl-15 pr-15 mb-30 flex-16 bs-bb">
              <h6 className="footer_widget_title text-blue">Resources</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Pricing and plans
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Terms of Service{" "}
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Help & FAQ{" "}
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="f" className="no-underline text-grey">
                      Site map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_news_letter flex-25 bs-bb pl-15 pr-15">
              <h6 className="footer_widget_title text-blue">News Letter</h6>
              <div className="footer_form mb-20">
                <input
                  id="footer_email"
                  className="footer-email text-left ol-none bs-bb"
                  placeholder="Your Email Address"
                ></input>
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
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container bs-bb">
          <div className="footer_bottom_content d-flex item-center">
            <div className="copy_right flex-41 pl-15 pr-15 bs-bb">
              <span className="text-blue">
                © 2020 Smart Data, All Rights Reserved. With Love by
              </span>
              <a href="7oroof" className="no-underline text-green">
                7oroof.com
              </a>
            </div>
            <div className="footer_scrollup_btn pl-15 pr-15 bs-bb">
              <button className="scrlup-btn ol-none d-flex justify-center">
                <i className="arrow-up text-center"></i>
              </button>
            </div>
            <div className="flex-41 pr-15 pl-15 bs-bb d-flex item-center jutify-content-end">
              <ul className="social_ul li-style-none d-flex item-center bs-bb">
                <li>
                  {" "}
                  <a href="sd" className="no-underline">
                    <i className="fb_tag">F</i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="sd" className="no-underline">
                    <i className="insta_tag">I</i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="sd" className="no-underline">
                    <i className="twitter_tag">T</i>
                  </a>{" "}
                </li>
              </ul>
              <div className="d-flex">
                <a
                  className="social_btn no-underline text-blue d-flex justify-center item-center bs-bb"
                  href="sd"
                >
                  <i className="icon-apple"></i>
                  <span>Apple Store</span>
                </a>
                <a
                  className="social_btn no-underline text-blue d-flex justify-center item-center bs-bb"
                  href="sd"
                >
                  <i className="icon-play-store"></i>
                  <span>Play Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
