import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroBanner from "./Components/HeroBanner";
import FeaturedProduct from "./Components/FeaturedProducts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroBanner />
      {/* <FeaturedProduct /> */}
    </div>
  );
}

export default App;
