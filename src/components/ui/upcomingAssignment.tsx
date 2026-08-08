import {
  LuBookOpen,
  LuClipboardList,
} from "react-icons/lu";

interface Assignment {
  id: number;
  title: string;
  upcoming: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

const assignments: Assignment[] = [
  {
    id: 1,
    title: "Network Protocol Analysis",
    upcoming: "Upcoming in 16 days",
    icon: LuClipboardList,
    iconBg: "bg-[#EEF2FF]",
    iconColor: "text-[#4F46E5]",
  },
  {
    id: 2,
    title: "Process Scheduling Simulation",
    upcoming: "Upcoming in 19 days",
    icon: LuBookOpen,
    iconBg: "bg-[#E8F7FF]",
    iconColor: "text-[#0EA5E9]",
  },
];

export default function UpcomingAssignments() {
  return (
    <div className="">
      <div className="w-full rounded-[10px] border border-[#E5E7EB] bg-white">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4">
          <h2 className="text-[14px] font-semibold text-[#111827]">
            Upcoming Assignments
          </h2>

          <button className="text-[12px] font-medium text-[#3155E7] hover:underline">
            View all
          </button>
        </div>

        {/* Assignment List */}
        <div className="px-5 pb-3">
          {assignments.map((assignment) => {
            const Icon = assignment.icon;

            return (
              <div
                key={assignment.id}
                className="flex h-[45px] items-center justify-between border-b border-[#F0F1F3] last:border-b-0"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-[24px] w-[24px] items-center justify-center rounded-[6px] ${assignment.iconBg}`}
                  >
                    <Icon
                      className={`h-[13px] w-[13px] ${assignment.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  <span className="text-[12px] font-medium text-[#374151]">
                    {assignment.title}
                  </span>
                </div>

                {/* Upcoming */}
                <span className="text-[11px] font-medium text-yellow-400">
                  {assignment.upcoming}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
