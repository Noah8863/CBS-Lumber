import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import underConstruction from '../src/images/under-construction.png'
import "./main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
        <>
          <img id="under-construction" src={underConstruction} />
          <a href="http://coloradobuildingsolutions.com/" target="_blank" rel="noreferrer"><button class="noselect"></button></a>
        </>
      }></Route>
      </Routes>
    </Router>
  );
}

export default App;
