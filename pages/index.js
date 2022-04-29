import { useEffect } from "react";
import usePodcaster from "../hooks/usePodcaster";
import PodcastGridCard from "../components/PodcastGridCard";

export default function Home() {
  const { podcasts, handleLoadPodcasts } = usePodcaster();

  useEffect(() => {
    handleLoadPodcasts();
  }, []);

  return (
    <div className="grid grid-cols-4 max-w-7xl m-auto gap-6 py-8">
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
  );
}
