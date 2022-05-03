import React from "react";
import Image from "next/image";
import usePodcaster from "../hooks/usePodcaster";
import Link from "next/link";

function LayoutPodcast({ episode = false, children }) {
  const { podcast, loading } = usePodcaster();
  const { id, image, name, artist, description } = podcast || {};
  const link = `/${id}`;

  return (
    <div
      className={`grid grid-cols-3 gap-10 max-w-7xl mx-auto my-10 ${
        loading && "blur-lg"
      }`}
    >
      <div>
        <div className="shadow p-5 max-w-sm divide-y">
          <div className="flex justify-center mb-6">
            {image && (
              <Link href={link} passHref>
                <Image
                  className={`${episode ? "cursor-pointer" : ""}`}
                  src={image}
                  width={200}
                  height={200}
                  alt={name}
                />
              </Link>
            )}
          </div>
          <div className="py-5">
            <Link href={link} passHref>
              <h2
                className={`font-bold ${
                  episode ? "cursor-pointer hover:text-sky-600" : ""
                }`}
              >
                {name}
              </h2>
            </Link>
            <Link href={link} passHref>
              <p
                className={`italic ${
                  episode ? "cursor-pointer hover:text-sky-600" : ""
                }`}
              >
                by {artist}
              </p>
            </Link>
          </div>
          <div className="py-5">
            <h3 className="font-semibold">Description</h3>
            <p>{description?.replace(/<[^>]+>/g, "")}</p>
          </div>
        </div>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}

export default LayoutPodcast;
