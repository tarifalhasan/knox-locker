import Benefits from "@/components/lading/Benefits";
import Features from "@/components/lading/Features";
import Footer from "@/components/lading/Footer";
import Header from "@/components/lading/Header";
import Hero from "@/components/lading/Hero";
import Team from "@/components/lading/Team";
import Tokenomics from "@/components/lading/Tokenomics";

const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Tokenomics />
      <Team />

      <Footer />
    </main>
  );
};

export default Home;
