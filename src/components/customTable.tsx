import type { ReactNode } from "react";

export interface TableColumn<T extends { id: string }> {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
}

interface CustomTableProps<T extends { id: string }> {
  columns: TableColumn<T>[];
  data: T[];
}

export default function CustomTable<T extends { id: string }>({
  columns,
  data,
}: CustomTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-left md:text-sm text-xs">
        {/* Table Head */}
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-6 py-4 font-semibold text-gray-700"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              {columns.map((column) => {
                const value = row[column.key];

                return (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-gray-600"
                  >
                    {column.render ? column.render(value, row) : String(value)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
