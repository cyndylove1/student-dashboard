import {
  LuBookOpen,
  LuCalendarDays,
  LuUsersRound,
  LuStar,
} from "react-icons/lu";

import type { IconType } from "react-icons";
import { useStats } from "../../hooks/useStats";
import { useAssignments } from "../../hooks/useAssignment";

interface Stat {
  id: number;
  title: string;
  value: string;
  icon: IconType;
  iconBg: string;
  iconColor: string;
}

export default function StatsCards() {
  const { data: dashboardStats } = useStats();

  const { data: assignments = [] } = useAssignments();

  //  Upcoming assignments
  const upcomingAssignments = assignments.filter(
    (assignment) =>
      assignment.status === "Upcoming",
  ).length;

  const stats: Stat[] = [
    {
      id: 1,
      title: "Total Courses",
      value: String(dashboardStats?.totalCourses ?? 0),
      icon: LuBookOpen,
      iconBg: "bg-[#EEF0FF]",
      iconColor: "text-[#3155E7]",
    },

    {
      id: 2,
      title: "Upcoming Assignments",
      value: String(upcomingAssignments),
      icon: LuCalendarDays,
      iconBg: "bg-[#E6F9F1]",
      iconColor: "text-[#19B77A]",
    },

    {
      id: 3,
      title: "Attendance",
      value: `${dashboardStats?.attendancePercentage ?? 0}%`,
      icon: LuUsersRound,
      iconBg: "bg-[#FFF4D9]",
      iconColor: "text-[#F5A400]",
    },

    {
      id: 4,
      title: "GPA",
      value: String(dashboardStats?.gpa ?? 0),
      icon: LuStar,
      iconBg: "bg-[#F3E8FF]",
      iconColor: "text-[#9747FF]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="flex h-[84px] items-center gap-5 rounded-[10px] border border-[#E5E7EB] bg-white px-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
          >
            {/* Icon */}
            <div
              className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full ${stat.iconBg}`}
            >
              <Icon
                className={`h-[23px] w-[20px] ${stat.iconColor}`}
                strokeWidth={1.8}
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-[2px]">
              <p className="text-[12px] font-medium leading-[18px] text-[#4B5563]">
                {stat.title}
              </p>

              <p className="text-[20px] font-semibold leading-[28px] text-[#111827]">
                {stat.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
