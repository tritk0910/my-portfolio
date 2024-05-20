import React from "react";

export default function Loading() {
  return (
    <div className="flex h-full justify-center items-center">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      Loading...
    </div>
  );
}
