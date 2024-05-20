import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="px-6 py-2 bg-gradient-to-tr from-orange-700 to-amber-500 transition-all hover:brightness-110 hover:scale-105 rounded-full text-white font-bold text-lg after:w-full after:h-full relative after:bg-gradient-to-tr after:from-orange-700 after:to-amber-500 after:absolute after:-z-10 after:scale-105 hover:after:opacity-100 after:opacity-0 after:transition-all after:blur-md after:top-0 after:left-0 after:rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
