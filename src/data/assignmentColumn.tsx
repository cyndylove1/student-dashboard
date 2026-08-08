import type { TableColumn } from "../components/customTable";
import type { Assignment } from "../data/mockData";

export const assignmentColumns: TableColumn<Assignment>[] = [
  {
    key: "title",
    label: "Assignment",
  },

  {
    key: "dueDate",
    label: "Due Date",
  },

  {
    key: "status",
    label: "Status",
    render: (value) => {
      const status = value as Assignment["status"];

      const styles: Record<Assignment["status"], string> = {
        Pending: "bg-yellow-100 text-yellow-700",
        Submitted: "bg-green-100 text-green-700",
        Overdue: "bg-red-100 text-red-700",
        Upcoming: "bg-blue-100 text-blue-700",
      };

      return (
        <span
          className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${styles[status]}`}
        >
          {status}
        </span>
      );
    },
  },

  {
    key: "priority",
    label: "Priority",
    render: (value) => {
      const priority = value as Assignment["priority"];

      const styles: Record<Assignment["priority"], string> = {
        High: "bg-red-100 text-red-700",
        Medium: "bg-yellow-100 text-yellow-700",
        Low: "bg-green-100 text-green-700",
      };

      return (
        <span
          className={`inline-block whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${styles[priority]}`}
        >
          {priority}
        </span>
      );
    },
  },
];
