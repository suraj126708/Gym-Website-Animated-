export default function TrainerImage({ img, side, animate }) {
  return (
    <div
      className={`h-[35rem] w-[35rem] absolute bottom-0 ${
        side === "right" ? "right-20" : "left-20"
      } bg-gradient-to-r from-green-700 ${animate} rounded-full`}
    >
      <img className="h-[42rem] absolute bottom-0" src={img} alt="" />
    </div>
  );
}
