import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="text-2xl font-bold">
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}
