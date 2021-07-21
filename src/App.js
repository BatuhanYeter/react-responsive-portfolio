import Appbar from "./components/appbar/Appbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="app">
      <Appbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
