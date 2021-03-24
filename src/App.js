import "./App.css";
import Header from "./component/header";
import SimpleSlider from "./component/slider";
import Second from "./component/second_section";
import ITsection from "./component/IT_section";
import TechSection from "./component/tech_section";
import PortfolioSection from "./component/Portfolio";
import Banner from "./component/banner_form";
import Footer from "./component/footer";
import Btn from "./component/btn_component/btn";
import { HashRouter, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <SimpleSlider />
        <Second />
        <ITsection />
        <TechSection />
        <PortfolioSection />
        <Banner />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
