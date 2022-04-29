import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex p-4 shadow font-bold text-sky-600">
      <Link href="/">Podcaster</Link>
    </div>
  );
};

export default Header;
