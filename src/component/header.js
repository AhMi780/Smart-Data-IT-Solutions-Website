import BrandLogo from "./../assets/images/logo-light.png";
export default function Header() {
  return (
    <nav className="header_nav w-100 d-flex item-center">
      <div className="container d-flex item-center">
        <a href="brand" className="nav_brand">
          <img src={BrandLogo} alt="brand.com" />
        </a>
        <div className="main_navigation">
          <ul className="header_ul d-flex text-white">
            <li className="li_home li-style-none ps-relative">
              <a href="services" className="no-underline text-white">
                {" "}
                Home
              </a>
              <div className="dd_home drop-down ps-absolute">
                <ul className="dd_ul li-style-none">
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      ahmad
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      ahmad
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      ahmad
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      ahmad
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      ahmad
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      ahmad
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li className="li_company li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                Company
              </a>
              <div className="dd_company drop-down ps-absolute">
                <ul className="dd_ul li-style-none">
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      hamza
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      hamza
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      hamza
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      hamza
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      hamza
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      hamza
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li className="li_it_soloution li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                IT Solutions
              </a>
              <div className="dd_it_soloution drop-down ps-absolute">
                <ul className="dd_ul li-style-none">
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      usama
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      usama
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      usama
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      usama
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      usama
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      usama
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </li>
            <li className="li_news li-style-none">
              <a href="services" className="no-underline text-white">
                {" "}
                News&Media
              </a>
              <div className="dd_news drop-down ps-absolute">
                <ul className="dd_ul li-style-none">
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      zeeshan
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      zeeshan
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      zeeshan
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      zeeshan
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      zeeshan
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="dd " className="no-underline">
                      {" "}
                      zeeshan
                    </a>{" "}
                  </li>
                </ul>
              </div>
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
        </div>
        <ul className="nav_action_buttons li-style-none d-flex item-center">
          <li className="ml-20">
            <a
              href="quote"
              className="nav_quote_btn no-underline bg-white text-black d-flex justify-center item-center"
            >
              Request A Quote
            </a>
          </li>
          <li className="ml-20 ">
            <button className="login_btn bg-trans text-white">
              <i className="icon"></i>
              <span>Login</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
