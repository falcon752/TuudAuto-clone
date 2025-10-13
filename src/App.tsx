import "./styles/main.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingSteps from "./components/BookingSteps";
import CarCollections from "./components/CarCollections";
import WhyChooseTuudAuto from "./components/WhyChooseTuudAuto";
import { Testimonials } from "./components/Testimonial";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <Services />
        <BookingSteps />
        <CarCollections />
        <WhyChooseTuudAuto />
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
