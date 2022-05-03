import React from "react";
import Link from "next/link";
import Spinner from "./Spinner";
import usePodcaster from "../hooks/usePodcaster";

const Header = () => {
  const { loading } = usePodcaster();

  return (
    <div className="flex justify-between p-4 shadow font-bold text-sky-600">
      <Link href="/">Podcaster</Link>
      {loading && <Spinner />}
    </div>
  );
};

export default Header;
