import React from "react";

interface BadgeProps {
  text: string;
  backgroundColor?: string;
  textColor?: string
}

const Badge: React.FC<BadgeProps> = ({ text, backgroundColor = "bg-blue-500", textColor = "text-black" }) => {
  return (
    <span
      className={`inline-block w-auto rounded-md px-3 py-[0.3rem] text-sm font-extrabold ${backgroundColor} ${textColor}`}
    >
      {text}
    </span>
  );
};

export default Badge;
