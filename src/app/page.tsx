import HomePage from "@/src/app/pages/home";
import About from "./pages/about";
import Contact from "@/src/app/pages/contact";
import Services from "./pages/services";

export default function Home() {
  return (<><HomePage />
  <Services />
  <About />
  <Contact />
  </>);
}
