import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import underConstruction from '../src/images/under-construction.png'
import NavBar from './components/Navbar/index'
import Footer from './components/Footer/index'
import "./main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
        <>
        <NavBar />
        <Footer />
          {/* <img id="under-construction" src={underConstruction} />
          <a href="http://coloradobuildingsolutions.com/" target="_blank" rel="noreferrer"><button class="noselect"></button></a> */}
        </>
      }></Route>
      </Routes>
    </Router>
  );
}

export default App;
