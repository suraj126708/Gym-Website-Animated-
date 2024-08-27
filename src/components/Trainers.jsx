import Navbar from "./Navbar";
import img1 from "../images/trainers/2.svg";
import img2 from "../images/trainers/3.svg";
import img3 from "../images/trainers/4.svg";
import img4 from "../images/trainers/5.svg";
import img5 from "../images/trainers/6.svg";
import TrainerImage from "./SmallComponents/TrainerImg";
import Trainercontent from "./SmallComponents/ContentTrainer";
import Footer from "./Footer";

export default function Trainers() {
  return (
    <>
      <div id="trainer-bg" className="h-[100vh] w-[100%] relative">
        <Navbar />
        <div className="absolute top-[35%] left-[10%] text-8xl font-sans">
          <h1 className="text-white  ">Our Dynamic</h1>
          <h1 className="mt-7 text-green-400 ">TRAINERS</h1>
        </div>
      </div>

      <div className="h-[100vh] w-[100%] bg-zinc-900 relative flex justify-around items-center ">
        <TrainerImage img={img1} side="left" />
        <Trainercontent side="right" />
      </div>

      <div className="h-[100vh] w-[100%] bg-zinc-900 relative flex justify-around items-center ">
        <TrainerImage img={img2} side="right" />
        <Trainercontent side="left" />
      </div>

      <div className="h-[100vh] w-[100%] bg-zinc-900 relative flex justify-around items-center ">
        <TrainerImage img={img3} side="left" />
        <Trainercontent side="right" />
      </div>

      <div className="h-[100vh] w-[100%] bg-zinc-900 relative flex justify-around items-center ">
        <TrainerImage img={img4} side="right" />
        <Trainercontent side="left" />
      </div>

      <div className="h-[100vh] w-[100%] bg-zinc-900 relative flex justify-around items-center ">
        <TrainerImage img={img5} side="right" />
        <Trainercontent side="left" />
      </div>

      <Footer bg={"bg-gradient-to-r from-green-700"} />
    </>
  );
}
