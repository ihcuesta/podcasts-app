import Link from "next/link";
import { formatDate, formatDuration } from "../utils";

const Episodes = ({ episodes, postId }) => {
  return (
    <>
      <div className="shadow mb-4 p-5">
        <h3 className="font-bold">Episodes: {episodes && episodes.length}</h3>
      </div>
      <div className="shadow p-3">
        <div className="grid grid-cols-6 gap-10 font-bold">
          <div className="col-span-4">
            <h3>Title</h3>
          </div>
          <div>
            <h3>Date</h3>
          </div>
          <div>
            <h3 className="text-right">Duration</h3>
          </div>
        </div>
        {episodes &&
          episodes.map((e) => {
            return (
              <div key={e.id} className="grid grid-cols-6 gap-10">
                <div className="col-span-4">
                  <Link href={`/${postId}/episodes/${e.id}`} passHref>
                    <p className="truncate cursor-pointer text-sky-600 hover:underline">
                      {e.title}
                    </p>
                  </Link>
                </div>
                <div>
                  <p>{formatDate(e.date)}</p>
                </div>
                <div>
                  <p className="text-right">{formatDuration(e.duration)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Episodes;
