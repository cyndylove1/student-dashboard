import cover from "../assets/beautiful-brunette-woman-staying-her-workplace.jpg";

export default function Cover() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Image */}
      <img
        src={cover}
        alt="cover-image"
        className="w-full h-full object-cover"
      />

      {/* Black gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" /> */}
    </div>
  );
}
