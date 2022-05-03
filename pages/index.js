import { useEffect } from "react";
import usePodcaster from "../hooks/usePodcaster";
import PodcastGridCard from "../components/PodcastGridCard";
import SearchBar from "../components/SearchBar";
import LoadingMask from "../components/LoadingMask";

export default function Home() {
  const { podcasts, handleLoadPodcasts, loading } = usePodcaster();

  useEffect(() => {
    handleLoadPodcasts();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingMask />
      ) : (
        <div className="max-w-7xl m-auto px-3">
          <SearchBar
            results={podcasts.length}
            handleSearch={handleLoadPodcasts}
          />
          {podcasts.length ? (
            <div className="grid grid-cols-4 gap-6 py-8">
              {podcasts.map((pod, i) => {
                return (
                  <PodcastGridCard
                    key={i}
                    id={pod.id}
                    img={pod.img}
                    title={pod.title}
                    author={pod.author}
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center w-full mt-20">
              <p>No results found.</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
