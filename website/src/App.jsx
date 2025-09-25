import { gsap } from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  
  return (
    <main>
      <Navbar/>
      <Hero/>
      {/* <div className="h-dvh bg-black"/> */}
      <Cocktails/>
    </main>
  )
}

export default App