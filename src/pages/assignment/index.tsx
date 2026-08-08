import CustomTable from "../../components/customTable";
import { useAssignments } from "../../hooks/useAssignment";
import { assignmentColumns } from "../../data/assignmentColumn";

export default function Assignment() {
  const { data: assignments = [], isLoading, isError } = useAssignments();

  if (isLoading) {
    return (
      <section className="flex min-h-[500px] items-center justify-center">
        <p className="text-sm text-gray-500">Loading assignments...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex min-h-[500px] items-center justify-center">
        <p className="text-sm text-red-500">Failed to load assignments.</p>
      </section>
    );
  }

  return (
    <section className="md:py-6 py-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="md:text-2xl text-lg font-semibold text-gray-900">Assignments</h1>

        <p className="mt-1 md:text-sm text-xs text-gray-500">
          View and manage all your assignments.
        </p>
      </div>

      {/* Table */}
      <CustomTable columns={assignmentColumns} data={assignments} />
    </section>
  );
}
