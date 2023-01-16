import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beer from "./components/Beer";
import Navbar from "./components/Navbar";
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />}>
          <Route path="/navbar/beer" element={<Beer />} />
          <Route path="/navbar/beer/:id" element={<BeerDetails />} />
          <Route path="/navbar/random-beer" element={<RandomBeer />} />
          <Route path="/navbar/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
