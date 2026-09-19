import Hero from "../sections/Hero.jsx";
import Benefits from "../sections/Benefits.jsx";
import SocialProof from "../sections/SocialProof.jsx";
import CardsSales from "../sections/Sales.jsx";
import Footer from "../components/layout/Footer.jsx"
import Forms from "../components/layout/Forms.jsx"
export default function Home() {
  return (
    <main>  
      <Hero />
      <Benefits />
      <SocialProof />
      <CardsSales />
      <Forms />
      <Footer />
    </main>
  );
}
