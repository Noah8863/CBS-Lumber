import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import underConstruction from '../src/images/under-construction.png'
import NavBar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Info from './components/Info/index'
import Certifications from './components/Certification/index'
import "./main.scss";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={
        <>
        <Info />
          {/* <img id="under-construction" src={underConstruction} />
          <a href="http://coloradobuildingsolutions.com/" target="_blank" rel="noreferrer"><button class="noselect"></button></a> */}
        <Certifications />
        </>
      }></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
