import React from "react";
import Image from "next/image";

function LayoutPodcast({ podcast, children }) {
  const { image, name, artist } = podcast;
  return (
    <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto my-10">
      <div>
        <div className="shadow p-5 max-w-sm divide-y">
          <div className="flex justify-center mb-6">
            {image && <Image src={image} width={200} height={200} alt={name} />}
          </div>
          <div className="py-5">
            <h2 className="font-bold">{name}</h2>
            <p className="italic">by {artist}</p>
          </div>
          <div className="py-5">
            <h3 className="font-semibold">Description</h3>
          </div>
        </div>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  );
}

export default LayoutPodcast;
