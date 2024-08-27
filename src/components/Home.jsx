import HeroPage from "./HeroPage";
import Gallary from "./OurWorkoutGalary";
import Schedule from "./Schedule";
import Footer from "./Footer";

export default function Home() {
  return (
    <div id="homepage">
      <HeroPage />
      <Gallary />
      <Schedule />
      <Footer />
    </div>
  );
}
