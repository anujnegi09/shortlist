import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Waitlist from "@/components/landing/Waitlist";
import Footer from "@/components/landing/Footer";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <NavBar />
      <Hero />
      <Features />
      <Waitlist />
      <Footer />
    </main>
  );
}