import Banner from "./components/Banner.js";
import Features from "./components/Features.js";
import Footer from "./components/Footer.js";
import NavBar from "./components/NavBar.js";
import Packages from "./components/Packages.js";
import Projects from "./components/Projects.js";
import Support from "./components/Support.js";
import Teams from "./components/Teams.js";
import WhatWeDo from "./components/WhatWeDo.js";

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <WhatWeDo/>
      <Features/>
      <Packages/>
      <Projects/>
      <Teams/>
      <Support/>
      <Footer/>
    </>
    
  );
}

export default App;
