import { lazy, Suspense } from "react";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Deferred so three.js never blocks first paint — the page renders on the
// flat ink background and the field appears behind it a beat later.
const Backdrop = lazy(() => import("./components/Backdrop.jsx"));

export default function App() {
  return (
    <>
      {/* Outside the z-10 wrapper: nesting it there would create a stacking
          context and bury the body::before grain overlay under the canvas. */}
      <Suspense fallback={null}>
        <Backdrop />
      </Suspense>
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Projects />
          <Experience />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
