export default function Trainercontent({ side }) {
  return (
    <div
      className={`text-white ${side === "right" ? "mr-10" : "ml-10"} w-[35%] 
      ${side === "right" ? "text-right" : "text-left"}  space-y-5 absolute ${
        side === "right" ? "right-0" : "left-0"
      }`}
    >
      <h1 className="font-serif text-green-500 text-6xl">Suraj Gitte</h1>
      <p className=" text-lg font-sans">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
        voluptate asperiores eos officia vero unde reiciendis at sed! Esse,
        dolore. Maiores quae deserunt animi fuga natus minima cupiditate
        possimus iusto! natus minima cupiditate possimus iusto!s
      </p>
      <hr />
    </div>
  );
}
