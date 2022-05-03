import React from "react";
import Link from "next/link";

const NoData = ({ home = false }) => {
  return (
    <div className="flex justify-center flex-col items-center w-full h-36">
      <p className="text-xl">No results found</p>
      <Link href="/" passHref>
        <span className="text-sky-600 cursor-pointer">
          {home ? "Try again" : "Go home >"}
        </span>
      </Link>
    </div>
  );
};

export default NoData;
