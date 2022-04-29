import { useEffect } from "react";
import Episodes from "../../components/Episodes";
import LayoutPodcast from "../../components/LayoutPodcast";
import usePodcaster from "../../hooks/usePodcaster";
import { useRouter } from "next/router";

const Podcast = () => {
  const { contextPodcast, handleLoadPodcast } = usePodcaster();
  const router = useRouter();
  const { podcastId } = router.query;

  useEffect(() => {
    handleLoadPodcast(podcastId);
  }, []);

  return (
    <LayoutPodcast podcast={contextPodcast}>
      <Episodes episodes={contextPodcast.episodes} postId={contextPodcast.id} />
    </LayoutPodcast>
  );
};

export default Podcast;
