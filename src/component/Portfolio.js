import Pfc1 from "./../assets/images/1(2).jpg";
import Pfc2 from "./../assets/images/2(2).jpg";
import Pfc3 from "./../assets/images/3(2).jpg";
export default function PortfolioSection() {
  return (
    <div className="portfolio_section w-100 pb-40 bg-gray">
      {" "}
      <div className="container bs-bb">
        <div className="pf_heading_box pr-15 pl-15">
          <div className="pf_heading d-flex item-center">
            <div className="heading_line bs-bb"></div>
            <h2>Success Stories</h2>
          </div>
          <h3 className="title text-blue text-left">Latest Case Studies</h3>
        </div>
        <div className=" pf_card_box d-flex flex-wrap">
          <div className="pf_card">
            <div className="pf_card_img">
              <img className="w-100 h-100" src={Pfc1} alt="pf"></img>
            </div>
            <div className="pf_card_content bs-bb text-left bg-white">
              <div className="pf_cat text-green">
                <a className="no-underline text-green " href="as">
                  Building
                </a>
                ,
                <a className="no-underline text-green" href="as">
                  Interior
                </a>
              </div>
              <h4 className="pf_card_title text-blue">
                <a className="no-underline text-blue" href="as">
                  Financial’s Need For Strategic Advisor
                </a>
              </h4>
              <p className="pf_card_desc text-grey">
                We delivered solutions at every step, and moved seamlessly into
                a more proactive role as a strategic advisor, providing support
                and guidance across all IT topics.{" "}
              </p>
              <a className="pf_btn no-underline" href="pf_card">
                <span className="btn_underline text-blue">Read More</span>
              </a>
            </div>
          </div>
          <div className="pf_card">
            <div className="pf_card_img">
              <img className="w-100 h-100" src={Pfc2} alt="pf"></img>
            </div>
            <div className="pf_card_content bs-bb text-left bg-white">
              <div className="pf_cat text-green">
                <a className="no-underline text-green " href="as">
                  Software
                </a>
                ,
                <a className="no-underline text-green" href="as">
                  Support
                </a>
              </div>
              <h4 className="pf_card_title text-blue">
                <a className="no-underline text-blue" href="as">
                  24x7 System Monitoring and Alert Response{" "}
                </a>
              </h4>
              <p className="pf_card_desc text-grey">
                This single, unified platform integrates all operational phases
                of selling and activation of their wireless services and
                devices, and serves as the backbone of the operations.{" "}
              </p>
              <a className="pf_btn no-underline" href="pf_card">
                <span className="btn_underline text-blue">Read More</span>
              </a>
            </div>
          </div>
          <div className="pf_card">
            <div className="pf_card_img">
              <img className="w-100 h-100" src={Pfc3} alt="pf"></img>
            </div>
            <div className="pf_card_content bs-bb text-left bg-white">
              <div className="pf_cat text-green">
                <a className="no-underline text-green " href="as">
                  Management
                </a>
                ,
                <a className="no-underline text-green" href="as">
                  Cloud
                </a>
              </div>
              <h4 className="pf_card_title text-blue">
                <a className="no-underline text-blue" href="as">
                  Nonprofit Organization Utilized Security{" "}
                </a>
              </h4>
              <p className="pf_card_desc text-grey">
                Servers going down on a weekly basis had become the
                organization’s “normal.” We came on board with the objective of
                stabilizing the environment, assisting{" "}
              </p>
              <a className="pf_btn no-underline" href="pf_card">
                <span className="btn_underline text-blue">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
