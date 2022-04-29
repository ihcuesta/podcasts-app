import { useState, useEffect } from "react";
import LayoutPodcast from "../../../components/LayoutPodcast";
import usePodcaster from "../../../hooks/usePodcaster";
import { useRouter } from "next/router";
import { isEmpty } from "ramda";

const Episode = () => {
  const { contextPodcast, handleLoadPodcast } = usePodcaster();
  const router = useRouter();
  const { episodeId, podcastId } = router.query;
  const [currentEpisode, setCurrentEpisode] = useState();

  useEffect(() => {
    isEmpty(contextPodcast) && handleLoadPodcast(podcastId);
  }, []);

  useEffect(() => {
    const episode = contextPodcast?.episodes?.filter((e) => e.id === episodeId);
    setCurrentEpisode(episode[0]);
  }, []);

  const { title, content, url } = currentEpisode || {};

  return (
    <LayoutPodcast podcast={contextPodcast}>
      <div className="shadow mb-4 p-5">
        <h2 className="font-bold">{title}</h2>
        <p>{content}</p>
        {url && (
          <audio className="mt-7" controls autoPlay>
            <source src={url} type="audio/ogg" />
            <source src={url} type="audio/mpeg" />
            <source src={url} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </LayoutPodcast>
  );
};

export default Episode;
