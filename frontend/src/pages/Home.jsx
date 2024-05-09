import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Products from "../components/Products";
import Blog from "../components/Blog";
import Newsletter from "../components/Newsletter";
import MyFooter from "../components/MyFooter";

export default function Home() {
  return (
    <>
       <Navbar />
       <Hero />
       <Services />
       <About />
       <Products />
       <Blog />
       <Newsletter />
       <MyFooter />
    </>
  )
}
