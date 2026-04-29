import Navbar from "./components/subBody/navbar.tsx";
import LandingPage from "./components/subBody/home.tsx";
import About from "./components/subBody/about.tsx";
import Skills from "./components/subBody/skill.tsx";
import Services from "./components/subBody/services.tsx";
import Contact from "./components/subBody/contact.tsx";
import Footer from "./components/subBody/footer.tsx";

function App() {
  return (
    <>
      <header className="h-auto">
        <Navbar />
      </header>
      <main>
        <LandingPage />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
