import { useIsFetching } from "@tanstack/react-query";

import Attendance from "../../components/ui/attendance";
import GPA from "../../components/ui/Gpa";
import StatsCards from "../../components/ui/statsCard";
import UpcomingAssignments from "../../components/ui/upcomingAssignment";

export default function Dashboard() {
  const isFetching = useIsFetching();

  if (isFetching > 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-sm text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <section className="md:py-6 py-10">
      {/* Welcome */}
      <div className="mb-6">
        <h1 className="md:text-2xl text-lg font-semibold text-gray-900">
          Welcome Back, Cynthia! 👋
        </h1>

        <p className="mt-1 md:text-sm text-xs text-gray-500">
          Here's what's happening with your studies today.
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Dashboard Analytics */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Attendance />
        <GPA />
      </div>

      {/* Upcoming Assignments */}
      <div className="mt-6">
        <UpcomingAssignments />
      </div>
    </section>
  );
}
