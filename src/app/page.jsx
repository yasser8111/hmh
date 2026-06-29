import Hero from "./Hero";
import About from "./about";
import Sections from "./sections";
import Doctors from "./Doctors";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Sections />
      <Doctors />
    </div>
  );
}
