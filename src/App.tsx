import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Services from './components/sections/Services';
import HowWeWork from './components/sections/HowWeWork';
import Testimonials from './components/sections/Testimonials';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark px-5 md:px-10 relative overflow-x-hidden">
      {/* Header */}
      <Header />

      <main id="main-content" className="relative z-10">
        <Hero />
        <Projects />
        <WhyChooseUs />
        <Services />
        <HowWeWork />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
