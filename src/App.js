import "./App.css";
import Header from "./component/header";
import SimpleSlider from "./component/slider";
import Second from "./component/second_section";
import ITsection from "./component/IT_section";
import TechSection from "./component/tech_section";
import PortfolioSection from "./component/Portfolio";
import Banner from "./component/banner_form";
import Footer from "./component/footer";
function App() {
  const sd = () => {};
  return (
    <>
      <div className=" ps-absolute index-1 w-100">
        <Header />
      </div>
      <div className="slider_comp">
        <SimpleSlider name={sd} />
      </div>
      <div className="second_comp">
        <Second />
      </div>
      <div>
        <ITsection />
      </div>
      <div>
        <TechSection />
        <PortfolioSection />
        <Banner />
        <Footer />
      </div>
    </>
  );
}

export default App;
