interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  stroke?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  type = "button",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 transition-all text-white ${
        disabled ? "opacity-70 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
