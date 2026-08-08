import CustomTable  from "../../components/customTable";

import { useCourses } from "../../hooks/useCourses";
import type { Course } from "../../data/mockData";
import { courseColumns } from "../../data/courseColumn";

export default function Courses() {
  const { data: courses = [], isLoading, isError } = useCourses();

  if (isLoading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-sm text-gray-500">Loading courses...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-sm text-red-500">Failed to load courses.</p>
      </div>
    );
  }

  return (
    <section className="md:py-6 py-10">
      <div className="mb-6">
        <h1 className="md:text-2xl text-lg font-semibold text-gray-900">Courses</h1>

        <p className="mt-1 md:text-sm text-xs text-gray-500">
          View all the courses you are currently enrolled in.
        </p>
      </div>

      <CustomTable<Course> columns={courseColumns} data={courses} />
    </section>
  );
}
