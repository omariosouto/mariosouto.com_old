import React from 'react';

export function DemoContent(): JSX.Element {
  return (
    <svg
      className="border-2 border-dashed border-gray-300 bg-white h-64 w-full text-gray-200"
      preserveAspectRatio="none"
      stroke="currentColor"
      fill="none"
      viewBox="0 0 200 200"
      aria-hidden="true"
    >
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="2"
        d="M0 0l200 200M0 200L200 0"
      ></path>
    </svg>
  );
}
