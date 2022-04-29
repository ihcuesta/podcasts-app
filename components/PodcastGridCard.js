import React from "react";
import Image from "next/image";
import Link from "next/link";

const PodcastCard = ({ id, img, title, author }) => {
  return (
    <Link href={`/${id}`} passHref>
      <div className="flex flex-col justify-center h-44">
        <div className="p-3 shadow-md cursor-pointer hover:bg-slate-100 rounded-sm">
          <div className="flex justify-center w-full -mt-10">
            <Image
              className="rounded-full"
              src={img}
              alt="ey"
              width={80}
              height={80}
            />
          </div>
          <h2 className="truncate text-center uppercase text-sm">{title}</h2>
          <p className="text-center text-xs text-slate-400">
            Author: <span>{author}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PodcastCard;
