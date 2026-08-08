import { useState } from "react";
import { PiCheckSquareFill } from "react-icons/pi";

interface CheckboxProps {
  height?: string;
  width?: string;
}

export default function Checkbox({
  height = "20px",
  width = "20px",
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div onClick={() => setIsChecked(!isChecked)} className="cursor-pointer">
      {isChecked ? (
        <PiCheckSquareFill style={{ height, width, color: "var(--main)" }} />
      ) : (
        <div
          style={{
            height,
            width,
            border: "1.5px solid var(--border)",
            borderRadius: "6px",
          }}
        ></div>
      )}
    </div>
  );
}
