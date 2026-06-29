import Hero from "./Hero";
import About from "./About";
import Sections from "./Sections";
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
