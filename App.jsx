import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import BiogasKits from "./components/BiogasKits";
import Articles from "./components/Articles";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return <div className="min-h-screen bg-blue-600 text-white overflow-hidden">
    <Navbar />
    <Hero />
    <AboutUs />
    <BiogasKits />
    <Articles />
    <ContactUs />
    <Footer />
  </div>
  }

export default App
