import BrandLight from "./../assets/images/logo-light.png";
import BrandDark from "./../assets/images/logo-dark.png";
export default function Header() {
  return (
    <nav className="header_nav w-100 d-flex item-center">
      <div className="container d-flex item-center justify-between pr-15 pl-15">
        <a href="brand" className="nav_brand h-100 ">
          <img className="d-none-md" src={BrandLight} alt="brand.com" />
          <img className="d-none d-block-md " src={BrandDark} alt="brand.com" />
        </a>
        <div className="main_navigation d-flex pl-15 pr-15 bs-bb ">
          <ul className="header_ul d-flex d-none-md">
            <li className="li_home li-style-none ps-relative">
              <a href="services" className="no-underline text-white">
                {" "}
                Home
              </a>
            </li>
            <li className="li_company li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                Company
              </a>
            </li>
            <li className="li_it_soloution li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                IT Solutions
              </a>
            </li>
            <li className="li_news li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                News&Media
              </a>
            </li>
            <li className="li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                Features
              </a>
            </li>
            <li className="li-style-none mr-0">
              <a href="services" className="no-underline text-white">
                {" "}
                Contacts
              </a>
            </li>
          </ul>

          <ul className="nav_action_buttons li-style-none d-flex item-center">
            <li className="ml-20 nav_action_btn_quote">
              <a
                href="quote"
                className="nav_quote_btn no-underline bg-white text-black d-flex justify-center item-center"
              >
                Request A Quote
              </a>
            </li>
            <li className="ml-20 ">
              <button className="login_btn bg-trans text-white-lg ">
                <i className="icon"></i>
                <span>Login</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
