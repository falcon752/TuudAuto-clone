import "./styles/main.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingSteps from "./components/BookingSteps";


function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <BookingSteps />
      </main>
    </div>
  );
}

export default App;
