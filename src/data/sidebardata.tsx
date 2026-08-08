import type { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

export interface SidebarItem {
  id: number;
  Label: string;
  path: string;
  icon: IconType;
}

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    Label: "DashBoard",
    path: "/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    id: 2,
    Label: "Courses",
    path: "/courses",
    icon: IoBookOutline,
  },
  {
    id: 3,
    Label: "Assignment",
    path: "/assignment",
    icon: MdAssignmentAdd,
  },
];
