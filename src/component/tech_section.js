import { icon } from "@fortawesome/fontawesome-svg-core";
import Icon1 from "./../assets/images/icon1.png";
import Icon2 from "./../assets/images/icon2.png";
import Icon3 from "./../assets/images/icon3.png";
import Icon4 from "./../assets/images/icon4.png";
import Tech from "./../assets/images/4.jpg";

export default function TechSection() {
  return (
    <div className="tech_section w-100 ps-relative">
      <div className="tech_bg"></div>
      <div className="container bs-bb">
        <div className="d-flex flex-wrap w-100 mb-30">
          <div className="tech_heading text-white flex-41 pl-15 pr-15 bs-bb">
            <div className="title_line mb-20"></div>
            <h3 className="title text-white mb-20">
              {" "}
              Provides consultative approach on emerging technology.
            </h3>
          </div>
          <div className="tech_desc_box d-flex flex-wrap bs-bb">
            <div className="flex-0-0-50 pr-15 pl-15 bs-bb">
              <p className=" tech_desc desc text-white text-left">
                As one of the world's largest ITService Providers with over 120
                engineers and IT support staff are ready to help.
              </p>
              <a
                className="tech_btn no-underline d-flex justify-center item-center text-white bg-green mt-30 mb-30"
                href="sk"
              >
                <span>Our Pricing</span>
              </a>
            </div>
            <div className="flex-0-0-50 pl-15 pr-15 bs-bb ">
              <p className="desc text-white text-left">
                SmartData been helping organizations and Providers through the
                World to manage their IT with our unique approach to technology
                management and consultancy solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="tech_card_box d-flex">
          <div className="flex-25 pl-15 pr-15 bs-bb">
            <div className="tech_card mb-30 d-flex flex-column">
              <div className="feature_icon align-self-center">
                <img src={Icon1} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">Software Asset</h4>
              <p className="text-grey mb-15">
                All aspects of your software assets including purchasing,
                deployment & maintenance.
              </p>
              <a className="no-underline align-self-center " href="arrow">
                =x
              </a>
            </div>
          </div>
          <div className="flex-25 pl-15 pr-15 bs-bb">
            <div className="tech_card mb-30 d-flex flex-column">
              <div className="feature_icon align-self-center">
                <img src={Icon2} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">
                Privileged Access
              </h4>
              <p className="text-grey mb-15">
                Extend proven Tech best practices to HR, finance, and other
                service delivery areas.
              </p>
              <a className="no-underline align-self-center " href="arrow">
                =x
              </a>
            </div>
          </div>
          <div className="flex-25 pl-15 pr-15 bs-bb">
            <div className="tech_card mb-30 d-flex flex-column">
              <div className="feature_icon align-self-center">
                <img src={Icon3} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">
                Software License
              </h4>
              <p className="text-grey mb-15">
                Build dynamic request templates with associated workflows, and
                tasks.
              </p>
              <a className="no-underline align-self-center " href="arrow">
                =x
              </a>
            </div>
          </div>
          <div className="flex-25 pl-15 pr-15 bs-bb">
            <div className="tech_card mb-30 d-flex flex-column">
              <div className="feature_icon align-self-center">
                <img src={Icon4} alt="icon" />
              </div>
              <h4 className="tech_feature_title text-white">
                Enterprise Service
              </h4>
              <p className="text-grey mb-15">
                Our technology allows you to offer the latest software to your
                possible customers!
              </p>
              <a className="no-underline align-self-center " href="arrow">
                =x
              </a>
            </div>
          </div>
        </div>
        <div className="tech_bottom mt-40 d-flex">
          <div className="flex-0-0-50 pl-15 pr-15 d-flex flex-column justify-between bs-bb">
            <div className="d-flex justify-between">
              <div className="reating_star">
                <icon></icon>
              </div>
              <div className="rating_review bs-bb text-white">
                <p className="mb-15 text-left">
                  <span className="bs-bb"> 99.9% Customer Satisfaction </span>{" "}
                  based on 750+ reviews and 20,000 Objective Resource
                </p>
              </div>
            </div>
            <div className="d-flex ">
              <div className="flex-0-0-50 pl-15 pr-15 bs-bb">
                <p className="tech_bottom_desc text-grey mb-30 text-left lh-15">
                  As one of the world's largest ITService Providers with over
                  120 engineers and IT support staff are ready to help.
                </p>
                <a
                  className="tech_btn no-underline d-flex justify-center item-center mb-30 text-green"
                  href="tech"
                >
                  <span>Request Demo</span>
                </a>
              </div>
              <div className="flex-0-0-50 pl-15 pr-15 bs-bb">
                <ul className="tech_ul bs-bb mb-30 bs-bb text-blue">
                  <li>450,000 client’s interactions </li>
                  <li>Help challenge critical activities</li>
                  <li>Simplify & Automate Workflows</li>
                  <li>Peer perspectives and advice</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tech_img flex-0-0-50 bs-bb pl-15 pr-15 ">
            <img className="w-100 bs-bb" src={Tech} alt="tech" />
          </div>
        </div>
      </div>
    </div>
  );
}