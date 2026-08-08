import type { TableColumn } from "../components/customTable";
import Progress from "../components/progress";
import type { Course } from "./mockData";

export const courseColumns: TableColumn<Course>[] = [
  {
    key: "title",
    label: "Course",
  },

  {
    key: "lecturer",
    label: "Lecturer",
  },

  {
    key: "progress",
    label: "Progress",
    render: (value) => {
      const progress = Number(value);

      return <Progress value={progress} />;
    },
  },

  {
    key: "status",
    label: "Status",
    render: (value) => {
      const status = value as Course["status"];

      const styles: Record<Course["status"], string> = {
        "In Progress": "bg-blue-100 text-blue-700",
        Completed: "bg-green-100 text-green-700",
        Upcoming: "bg-yellow-100 text-yellow-700",
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
];
