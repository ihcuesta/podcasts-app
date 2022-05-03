import React from "react";

const LoadingMask = () => {
  return (
    <div className="flex justify-center items-center text-white text-6xl fixed w-full h-full bg-sky-600/[.8] z-20">
      <p>Loading...</p>
    </div>
  );
};

export default LoadingMask;
