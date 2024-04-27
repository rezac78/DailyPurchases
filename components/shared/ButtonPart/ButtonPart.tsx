import React, { ReactNode } from "react";
interface ButtonPartProps {
  label: string;
  className: string;
  handleClick?: () => void;
  children: ReactNode;
}
export default function ButtonPart({
  children,
  label,
  className,
  handleClick,
}: ButtonPartProps) {
  return (
    <button aria-label={label} onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
