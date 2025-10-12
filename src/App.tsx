import "./styles/main.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}

export default App;
