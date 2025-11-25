import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialBar from "../components/SocialBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SocialBar heroId="hero" />
        <Hero />
        {/* Add more sections here: projects, about, contact */}
      </main>
    </>
  );
}
