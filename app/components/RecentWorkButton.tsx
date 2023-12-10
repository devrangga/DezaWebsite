import React from "react";

interface recentWorkButtonProps {
  isSelected: boolean;
  label: string;
  handleSelected: any;
}

const RecentWorkButton: React.FC<recentWorkButtonProps> = ({
  isSelected,
  label,
  handleSelected,
}) => {
  return (
    <button
      onClick={handleSelected}
      className={`${
        isSelected ? "bg-zinc-500 text-zinc-100" : "bg-zinc-200 text-zinc-900"
      } px-6 py-2 rounded-lg w-full`}
    >
      {label}
    </button>
  );
};

export default RecentWorkButton;
