import Img from "./SmallComponents/Img";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallary() {
  // animaiton

  useGSAP(() => {
    gsap.from(".right", {
      y: 80,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#img4",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
      },
    });

    gsap.from(".left", {
      x: -80,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#img4",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
      },
    });
    gsap.from(".middle", {
      x: 80,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: "#img4",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
      },
    });
  });

  /////////////////////////////////

  return (
    <>
      <h1 className="text-white text-center font-serif text-4xl my-4">
        Gym Gallary{" "}
      </h1>
      <div
        id="galary"
        className="h-[95vh] w-[100%] grid grid-cols-3 grid-rows-2 gap-0 "
      >
        <Img img={img1} classForAnimation={"left"} id={"img4"} />
        <Img img={img2} classForAnimation={"right"} />
        <Img img={img3} classForAnimation={"middle"} />
        <Img img={img4} classForAnimation={"left"} />
        <Img img={img5} classForAnimation={"right"} />
        <Img img={img6} classForAnimation={"middle"} />
      </div>
    </>
  );
}
