import Logo from "../images/fit4you.png";
import Gmap from "./Gmap";
import NavbarAnchor from "./SmallComponents/NavbarAnchor";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ bg }) {
  // animaiton

  useGSAP(() => {
    gsap.from("#f1", {
      x: -80,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#footer",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 10%",
        scrub: 2,
      },
    });

    gsap.from("#f2", {
      x: 80,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "#footer",
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
    <div
      id="footer"
      className={`lg:flex lg:justify-around lg:items-center h-[100vh] w-[100%] ${
        bg || "bg-slate-600"
      }`}
    >
      <div className="w-[40%] h-[70vh]" id="f1">
        <img src={Logo} alt="" className="h-20 my-10 ml-10" />
        <p className=" ml-10 text-lg text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
          itaque neque.
        </p>
        <label
          for="input-group-1"
          class="mt-10 ml-10 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Email
        </label>
        <div class="relative mb-6 ml-10">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] ps-10 p-2.5   dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
      <div id="f2" className="flex-col justify-center items-center ">
        <h1 className="text-green-300 font-serif text-4xl my-2">
          Visit our Gym Now !!
        </h1>
        <div className="my-6 shadow-sm border-2 opacity-80 hover:opacity-100">
          <Gmap></Gmap>
        </div>
        <div className=" text-white">
          <ul className="lg:flex lg:gap-5 justify-center items-center">
            <NavbarAnchor to={"/"} text={"home"} />
            <NavbarAnchor to={"/about"} text={"About"} />
            <NavbarAnchor to={"/services"} text={"Services"} />
            <NavbarAnchor to={"/Pricing"} text={"Pricing"} />
            <NavbarAnchor to={"/contact"} text={"contact"} />
          </ul>
          <p className="text-center my-6">copyright @2022 fit4you</p>
        </div>
      </div>
    </div>
  );
}
