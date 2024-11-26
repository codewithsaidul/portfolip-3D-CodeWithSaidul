import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Project from "./sections/Project";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      {/* ===================== Navbar ====================== */}
      <Navbar />
      {/* ===================== Navbar ====================== */}

      <main>
        {/* ===================== Hero ====================== */}
        <Hero />
        {/* ===================== Hero ====================== */}

        {/* ===================== About Me ====================== */}
        <About />
        {/* ===================== About Me ====================== */}

        {/* ===================== Project ====================== */}
        <Project />
        {/* ===================== Project ====================== */}

        {/* ===================== Testimonial ====================== */}
        <Testimonial />
        {/* ===================== Testimonial ====================== */}

        {/* ===================== Cotact ====================== */}
        <Contact />
        {/* ===================== Cotact ====================== */}
      </main>

      {/* ===================== Footer ====================== */}
      <Footer />
      {/* ===================== Footer ====================== */}
    </main>
  );
};

export default App;
