import AboutUs from "@/components/AboutUs";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header Section - First */}
      <section id="home">
        <Header />
      </section>
      
      {/* AboutUs Section - Second */}
      <section id="about">
        <AboutUs />
      </section>
      
     
    </div>
  );
}