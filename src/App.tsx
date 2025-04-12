import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./header/header";
import "./App.css";
import Projects from "./components/projects/Projects";
import Intrests from "./components/intersets/Intrests";
import Education from "./components/education/Education";
import Contact from "./components/contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Intrests />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
