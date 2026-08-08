import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { day: "Jan", income: 50 },
  { day: "Feb", income: 40 },
  { day: "Mar", income: 25 },
  { day: "Apr", income: 60 },
  { day: "Jun", income: 55 },
  { day: "Jul", income: 20 },
  { day: "Aug", income: 80 },
];

// Custom tooltip with transparent background
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: "5px",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: 0, color: "#10B981" }}>{`${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default function GPA() {
  return (
    <div className="w-full h-[340px] bg-white rounded-[12px] pt-4 mt-2 px-4 pb-10 border-[1px] border-[#E2E2E2]">
      {/* title */}
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] leading-[18px] mb-4">
          GPA Card
        </h2>
        <h4 className="text-[20px] font-bold">3.85</h4>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid
            stroke="#E5E7EB"
            vertical={false}
            strokeDasharray="0"
          />

          <XAxis
            dataKey="day"
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            ticks={[1.8, 2.8, 3.8]}
            domain={[1.8, 3.8]}
            tick={{ fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="income"
            stroke="#75c13f"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
