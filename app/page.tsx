import AboutUs from "@/components/AboutUs";
import Chef from "@/components/Chef";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import SpecialMenu from "@/components/SpecialMenu";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-dark">
      <Navbar/>
      <Header/>
      <AboutUs/>
      <SpecialMenu/>
      <Chef/>
      <Intro/>
      <Gallery/>
      <FindUs/>
      <Footer/>
    </section>
  );
}
