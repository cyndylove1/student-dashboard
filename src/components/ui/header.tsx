import { RiMenuLine, RiSearchLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import profile from "../../assets/black-woman3.png";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-white h-[64px] border-b border-[#DEDEDF] px-6">
      <div
        className="flex text-[30px] text-neutral-950 lg:hidden"
        onClick={onMenuClick}
      >
        <RiMenuLine size={24} />
      </div>
      {/* Search */}
      <div className="flex items-center">
        <div className="relative md:w-[280px]">
          <RiSearchLine
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#667085]"
          />

          <input
            type="text"
            placeholder="Search"
            className="w-full h-[36px] rounded-[8px] hidden md:flex border border-(--border) bg-white pl-10 pr-4 text-[13px] text-(--color) outline-none placeholder:text-[#98A2B3] focus:border-(--main)"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Notification */}
        <button
          type="button"
          className="flex items-center justify-center text-[#475467]"
        >
          <GoBell size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          {/* Profile Image */}
          <div className="w-[40px] h-[40px] shrink-0 overflow-hidden rounded-full">
            <img
              src={profile}
              alt="Nweke Cynthia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[12px] font-semibold leading-[16px] text-[#161616] capitalize">
              Nweke Cynthia
            </h2>

            <p className="text-[10px] font-normal leading-[14px] text-[#808080] capitalize">
              Student
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
