import IconServer from "./../assets/images/IT_icons/server.png";
import IconCyber from "./../assets/images/IT_icons/cyber.png";
import IconCloud from "./../assets/images/IT_icons/cloud.png";
export default function ITsection() {
  return (
    <div className="it_section w-100 bg-gray">
      <div className="container bs-bb">
        <div className="It_content d-flex flex-column item-center justify-center">
          <div className="mb-40">
            <div className="IT_heading pr-15 pl-15 w-100 d-flex item-center bs-bb">
              <div className="heading_line bs-bb"></div>
              <h2 className="text-green">
                Nationwide Service, Local Expertise
              </h2>
            </div>
            <div className="d-flex w-100 flex-wrap">
              <div className="IT_heading_box pl-15 pr-15 bs-bb">
                <h3 className="title text-blue mb-20">
                  Offering the latest software and IT services to our customers!
                </h3>
              </div>
              <div className="flex-41 pl-15 pr-15 bs-bb">
                <p className="desc text-grey">
                  Improve efficiency, leverage tech, and provide better customer
                  experiences with the modern technology services available
                  allover the world. Our skilled personnel, utilising the latest
                  processing software, combined with decades of experience.
                </p>
              </div>
            </div>
          </div>
          <div className="IT_cards_box d-flex flex-wrap justify-center">
            <div className="IT_card bg-white">
              <div className="IT_card_content">
                {" "}
                <div className="IT_icon mb-20">
                  {" "}
                  <img src={IconServer} alt="icon" />
                </div>{" "}
                <h4 className="card_title text-blue mb-15">
                  IT Management <br /> services
                </h4>{" "}
                <p className="card_desc text-grey">
                  IT management service that manages and oversees the IT
                  infrastructure of any civil organization responsible for
                  network and operations which includes data{" "}
                </p>{" "}
                <ul className="mb-30 text-blue">
                  <li>Business IT alignment</li>
                  <li> IT financial management</li>
                  <li> IT service management</li>
                </ul>{" "}
                <a
                  className="IT_btn d-flex justify-center item-center no-underline"
                  href="It"
                >
                  {" "}
                  <span>Read More</span>{" "}
                </a>{" "}
              </div>
            </div>
            <div className="IT_card bg-white">
              <div className=" IT_card_content">
                {" "}
                <div className="IT_icon mb-20">
                  {" "}
                  <img src={IconCyber} alt="icon" />
                </div>{" "}
                <h4 className="card_title text-blue mb-15">
                  Cyber Security
                  <br /> services
                </h4>{" "}
                <p className="card_desc text-grey">
                  Drive your business and manage risk with a global industry
                  leader in cybersecurity, cloud, and managed security services
                  and extend your team with leading experts.
                </p>{" "}
                <ul className="mb-30 text-blue">
                  <li>Internet security</li>
                  <li>Automotive security</li>
                  <li>Cyberwarfare</li>
                </ul>{" "}
                <a
                  className="IT_btn d-flex justify-center item-center no-underline"
                  href="It"
                >
                  {" "}
                  <span>Read More</span>{" "}
                </a>{" "}
              </div>
            </div>
            <div className="IT_card bg-white">
              <div className=" IT_card_content">
                {" "}
                <div className="IT_icon mb-20">
                  {" "}
                  <img src={IconCloud} alt="icon" />
                </div>{" "}
                <h4 className="card_title text-blue mb-15">
                  Cloud Computing
                  <br /> services
                </h4>{" "}
                <p className="card_desc text-grey ">
                  Cloud computing is on-demand availability of computer system
                  resources, especially data storage computing power, without
                  direct active management by the user.
                </p>{" "}
                <ul className="mb-30 text-blue">
                  <li>Private cloud services</li>
                  <li>Public cloud services</li>
                  <li>Hybrid cloud services</li>
                </ul>{" "}
                <a
                  className="IT_btn d-flex justify-center item-center no-underline"
                  href="It"
                >
                  {" "}
                  <span>Read More</span>{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="explore_servecis w-100">
            <div className="d-flex w-100 pl-15 pr-15">
              <a
                className="explore_btn no-underline d-flex justify-center item-center text-white"
                href="explore"
              >
                {" "}
                <span>Explore All Services</span>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}