import HomePage from "./pages/HomePage.js";
import Navbar from "./components/Navbar.js";
import "./App.css";
import "./Responsive.css";
import "./Animation.css";
import Footer from "./components/Footer.js";
import useScrollSmooth from "./hooks/useScrollSmooth.js";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useScrollSmooth();
  AOS.init({
    duration: 1500,
  });

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
