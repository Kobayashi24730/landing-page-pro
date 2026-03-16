import Hero from "../sections/Hero";
import Benefits from "../sections/Benefits";
import SocialProof from "../sections/SocialProof";
import CardsSales from "../sections/Sales.tsx";
import Footer from "../components/layout/Footer.tsx"
import Forms from "../components/layout/Forms.tsx"
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
