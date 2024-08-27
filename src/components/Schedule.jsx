import Table from "./SmallComponents/Table";
import bodybuilder from "../images/body-bulder.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Schedule() {
  // animaiton

  useGSAP(() => {
    gsap.from("#text-schedule", {
      x: -80,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#schedule",
    });

    gsap.from("#img-schedule", {
      x: 80,
      duration: 1,
      opacity: 0,
      scrollTrigger: "#schedule",
    });
  });

  /////////////////////////////////

  return (
    <div className="h-[100vh] w-[100%] relative " id="schedule">
      <h1 className="py-10 text-green-300 text-4xl font-serif text-center">
        Schedule of Gym
      </h1>

      <div className=" flex h-[100vh] pl-16">
        <div
          id="text-schedule"
          className="text-slate-50 w-[100vh] h-[90vh] flex-col justify-evenly text-left py-6"
        >
          <h2 className=" text-4xl font-serif">Welcome to Fit4You</h2>
          <div className="w-[65%]">
            <p className="py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              itaque facilis non. Reprehenderit, modi blanditiis adipisci
              asperiores eveniet quidem quasi! Ipsam quasi eum, reiciendis a id
              maxime ratione. At, nobis.
            </p>
          </div>
          <Table />
        </div>

        <div id="img-schedule" className="h-[100%] absolute bottom-0 right-0 ">
          <img src={bodybuilder} className=" h-[100vh]" alt="" />
        </div>
      </div>
    </div>
  );
}
