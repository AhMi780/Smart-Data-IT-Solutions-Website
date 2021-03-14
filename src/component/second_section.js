import about_img from "./../assets/images/2.jpg";
function Second() {
  return (
    <div className="secon_section w-100">
      <div className="container container-sm bs-bb">
        <div className=" mb-20 pl-15 pr-15 bs-bb d-flex item-center">
          <div className="heading_line bs-bb"></div>
          <h2 className="second_heading text-green ff-roboto">
            Timely Service Delivery & Incident Resolutions!!
          </h2>
        </div>
        <div className="d-flex w-100 flex-wrap">
          <div className="flex-0-0-50 flex-100-md pr-15 pl-15 bs-bb">
            <h3 className="second_heading_title title bs-bb text-left text-blue mb-40">
              Manages service delivery across various business like, HR, Legal
              and other IT departments!!
            </h3>
          </div>
          <div className="flex-0-0-50 flex-100-md pr-15 pl-15 bs-bb">
            <div className="second_desc">
              <p className="desc mb-15 text-grey">
                SmartData has been helping organizations throughout the World to
                manage their IT with our unique approach to technology
                management and consultancy solutions. Provide users with
                appropriate view and access permissions to requests, problems,
                changes, contracts, assets, solutions, and reports with our
                experienced professionals.
              </p>
              <p className="desc mb-15 text-grey">
                As one of the world's largest ITService Providers, our deep pool
                of certified engineers and IT staff are ready to help you to
                keep your IT business safe & ensure high availability.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 flex-wrap">
          <div className="flex-0-0-50 flex-100-md pl-15 pr-15 bs-bb">
            <div className="about_img ps-relative ">
              <img className="w-100 h-100" src={about_img} alt="video" />
            </div>
          </div>
          <div className="flex-0-0-50 flex-100-md pl-15 pr-15 bs-bb">
            <ul className="second_ul d-flex flex-wrap pr-15 pl-15 text-left">
              <li>Eliminate Repeat Entry</li>
              <li>Drive Business Process</li>
              <li>Structure Data & Docs</li>
              <li>Simpliy Communication</li>
              <li>Speed Up Transactions</li>
              <li>Automate Workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Second;
