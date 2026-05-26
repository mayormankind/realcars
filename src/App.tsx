import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import FleetCarousel from "./components/FleetCarousel";
import Fleet from "./components/Fleet";
import BookingForm from "./components/BookingForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import type { FleetType } from "./utils/mockData";

export default function App() {
  const [bookingCategory, setBookingCategory] = useState<string>("");

  const handleBookCar = (category: FleetType) => {
    setBookingCategory(category);
    const bookingSection = document.getElementById("quote");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#09090b] text-[#f4f4f5] selection:bg-red-500 selection:text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <Stats />
      <main>
        <Services />
        <FleetCarousel onBookCar={handleBookCar} />
        <Fleet onBookCar={handleBookCar} />
        <BookingForm selectedCategory={bookingCategory} setSelectedCategory={setBookingCategory} />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
