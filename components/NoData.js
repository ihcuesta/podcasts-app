import React from "react";
import Link from "next/link";

const NoData = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-32">
      <p className="text-xl">No results found</p>
      <Link href="/" passHref>
        <span className="text-sky-600 cursor-pointer">Go home &gt;</span>
      </Link>
    </div>
  );
};

export default NoData;
