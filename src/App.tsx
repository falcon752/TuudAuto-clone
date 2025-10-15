import { BrowserRouter, Routes, Route } from "react-router-dom"
import CarForm from "./pages/CarForm"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import BookingSteps from "./components/BookingSteps"
import CarCollections from "./components/CarCollections"
import WhyChooseTuudAuto from "./components/WhyChooseTuudAuto"
import { Testimonials } from "./components/Testimonial"
import Footer from "./components/Footer"
import "./styles/main.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <BookingSteps />
              <CarCollections />
              <WhyChooseTuudAuto />
              <Testimonials />
              <Footer />
            </>
          } />

          <Route path="/create-car" element={<CarForm />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
