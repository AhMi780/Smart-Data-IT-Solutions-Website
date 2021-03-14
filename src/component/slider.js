import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings} className="slider">
      <div className="slider_card1">
        <div className="container container-sm">
          <div className="slide_content_div">
            <h2 className="slide-title">
              We Run All Kinds Of IT Services That Vow Your Success
            </h2>
            <p className="slide-desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
            <div className="d-flex">
              <a
                href="aboutus"
                className="btn-header no-underline bg-green d-flex justify-center item-center text-white mr-30"
              >
                More About Us
              </a>
              <a
                href="services"
                className="btn-header no-underline bg-white d-flex justify-center item-center text-black"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="slider_card2">
        <div className="container">
          <div className="slide_content_div">
            <h2 className="slide-title">
              Keep Business Safe And Ensure High Availability.{" "}
            </h2>
            <p className="slide-desc">
              We are experienced professionals who understand that It services
              is changing, and are true partners who care about your success.
              Our team provides a consultative approach on emerging technology.
            </p>
            <div className="d-flex">
              <a
                href="aboutus"
                className="btn-header no-underline bg-green d-flex justify-center item-center text-white mr-30"
              >
                More About Us
              </a>
              <a
                href="services"
                className="btn-header no-underline bg-white d-flex justify-center item-center text-black"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
