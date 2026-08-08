import { Link } from "react-router-dom";
import { LuGraduationCap } from "react-icons/lu";

export default function Logo() {
  return (
    <>
      <Link to="/" className="flex items-center pb-3 gap-2">
        <span className="text-(--main)">
          <LuGraduationCap size={30} />
        </span>
        <h2 className="md:text-[20px] text-[15px] font-bold">MpCircle</h2>
      </Link>
    </>
  );
}
