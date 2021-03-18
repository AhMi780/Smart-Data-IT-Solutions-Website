import FooterLogo from "./../assets/images/logo/logo-dark.png";
import { FacebookOutlined } from "@ant-design/icons";
import { InstagramOutlined } from "@ant-design/icons";
import { TwitterOutlined } from "@ant-design/icons";
export default function Footer() {
  return (
    <div className="footer bs-bb bg-white">
      <div className="footer_primary bs-bb">
        <div className="container container-sm bs-bb">
          <div className="footer_content d-flex flex-wrap">
            <div className="footer_logo flex-25 flex-100-md pl-15 pr-15 bs-bb">
              <img className="mb-30" src={FooterLogo} alt="logo" />
            </div>
            <div className="footer_widget pl-15 pr-15 mb-30 flex-16 flex-md-30 flex-50-sm flex-100-es bs-bb">
              <h6 className="footer_widget_title text-blue">Company</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="#" className="no-underline text-grey">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Meet Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      News & Media
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget pl-15 pr-15 mb-30 flex-16 flex-md-30 flex-50-sm flex-100-es bs-bb">
              <h6 className="footer_widget_title text-blue">Solutions</h6>

              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="#" className="no-underline text-grey">
                      IT Management
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Cyber Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Cloud Computing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      IT Consulting{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Software Dev
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      IT Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_widget pl-15 pr-15 mb-30 flex-16 flex-md-30 flex-50-sm flex-100-es bs-bb">
              <h6 className="footer_widget_title text-blue">Resources</h6>
              <div className="footer_widget_content">
                <ul className="li-style-none">
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Pricing and plans
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Terms of Service{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Help & FAQ{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Contact Us{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="no-underline text-grey">
                      Site map
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer_news_letter flex-25 flex-50-md flex-100-es bs-bb pl-15 pr-15">
              <h6 className="footer_widget_title text-blue">News Letter</h6>
              <div className="footer_form mb-20">
                <input
                  id="footer_email"
                  className="footer-email w-100 text-left ol-none bs-bb"
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
        <div className="container container-sm bs-bb">
          <div className="footer_bottom_content d-flex flex-wrap item-center justify-center">
            <div className="copy_right flex-41 flex-100-sm pl-15 pr-15 bs-bb es-text-center">
              <span className="text-blue">
                © 2020 Smart Data, All Rights Reserved. With Love by
              </span>
              <a href="#" className="no-underline text-green">
                7oroof.com
              </a>
            </div>
            <div className="footer_scrollup_btn flex-100-sm pl-15 pr-15 bs-bb">
              <button className="scrlup-btn ol-none d-flex justify-center">
                <i className="arrow-up text-center"></i>
              </button>
            </div>
            <div className="flex-41 flex-100-sm pr-15 pl-15 bs-bb d-flex flex-wrap es-flex-column item-center jutify-content-end">
              <ul className="social_ul li-style-none d-flex item-center bs-bb m-10">
                <li>
                  {" "}
                  <a href="#" className="no-underline">
                    <i className="social_tag text-blue trans-3s">
                      <FacebookOutlined />
                    </i>
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#" className="no-underline">
                    <i className="social_tag text-blue trans-3s">
                      <InstagramOutlined />
                    </i>
                  </a>{" "}
                </li>
                <li className="mr-0">
                  {" "}
                  <a href="#" className="no-underline">
                    <i className="social_tag text-blue trans-3s">
                      <TwitterOutlined />
                    </i>
                  </a>{" "}
                </li>
              </ul>
              <div className="d-flex flex-wrap">
                <a
                  className="social_btn btn ps-relative index-1 no-underline text-blue d-flex justify-center item-center bs-bb m-10"
                  href="#"
                >
                  <i className="icon-apple"></i>
                  <span>Apple Store</span>
                </a>
                <a
                  className="social_btn btn ps-relative index-1 no-underline text-blue d-flex justify-center item-center bs-bb m-10"
                  href="#"
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
