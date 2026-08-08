import cover from "../assets/student.png";

export default function Cover() {
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden">
      {/* Image */}
      <img
        src={cover}
        alt="cover-image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
