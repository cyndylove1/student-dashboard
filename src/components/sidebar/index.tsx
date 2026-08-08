import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../data/sidebardata";
import Logo from "../../components/logo";
import { MdLogout, MdClose } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          z-50
          h-screen
          w-[250px]
          shrink-0
          bg-white
          border-r border-[#DEDEDF]
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo + Close Button */}
        <div className="flex items-center justify-between px-4 pt-6">
          <Logo />

          {/* Close button - Mobile only */}
          <button
            type="button"
            onClick={onClose}
            className="flex lg:hidden items-center justify-center text-[#161616]"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="mt-6">
          <ul>
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? "text-(--main)" : "text-[#00000080]"
                  }
                >
                  {({ isActive }) => {
                    const Icon = item.icon;

                    return (
                      <div className="relative flex items-center w-full mt-2">
                        <div
                          className={`
                            flex items-center gap-[12px]
                            leading-[8px]
                            rounded-[8px]
                            mx-4
                            px-4
                            w-full
                            h-[38px]
                            ${
                              isActive
                                ? "bg-(--main) text-white border-[0.6px] border-[#E2E2E2]"
                                : "text-[#00000080]"
                            }
                          `}
                        >
                          <span>
                            <Icon
                              size={16}
                              className={
                                isActive ? "text-white" : "text-[#00000080]"
                              }
                            />
                          </span>

                          <h2 className="text-[12px]">{item.Label}</h2>
                        </div>
                      </div>
                    );
                  }}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <button
          type="button"
          className="flex items-center text-gray-800 gap-[12px] px-6 pt-[10rem]"
        >
          <span>
            <MdLogout size={20} />
          </span>

          <h2 className="text-[12px] leading-[18px]">Logout</h2>
        </button>
      </aside>
    </>
  );
}
