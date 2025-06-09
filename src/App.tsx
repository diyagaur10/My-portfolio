// views
import { About, Contact, Hero, Projects, KnowMeAI } from "./views";

// components
import { Menu } from "./components";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <KnowMeAI />
      <Menu />
    </>
  );
}

export default App;
