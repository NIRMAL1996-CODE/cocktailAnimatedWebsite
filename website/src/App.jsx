import { gsap } from "gsap";
import { ScrollTrigger,SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <div>
      <h1 className="text-5xl flex-center text-indigo-400 h-[100vh]">Hello, GSAP Baby!</h1>
    </div>
  )
}

export default App