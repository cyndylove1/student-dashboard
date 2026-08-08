import type { CSSProperties } from "react";

interface ProgressProps {
  value: number;
}

export default function Progress({ value }: ProgressProps) {
  return (
    <div
      className="radial-progress text-(--main) text-xs"
      style={
        {
          "--value": value,
          "--size": "2.5rem",
          "--thickness": "3px",
        } as CSSProperties
      }
      aria-valuenow={value}
      role="progressbar"
    >
      {value}%
    </div>
  );
}
