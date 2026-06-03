import Hero from "@/components/Hero";
import CountdownTimer from "@/components/CountdownTimer";
import Couple from "@/components/Couple";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import LoveStory from "@/components/LoveStory";
import RSVPForm from "@/components/RSVPForm";
import WishesWall from "@/components/WishesWall";

export default function Home() {
  return (
    <main>
      <Hero />
      <CountdownTimer />
      <Couple />
      <EventDetails />
      <Gallery />
      <LoveStory />
      <RSVPForm />
      <WishesWall />
    </main>
  );
}
