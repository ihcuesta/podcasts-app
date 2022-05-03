import { useEffect } from "react";
import Episodes from "../../components/Episodes";
import LayoutPodcast from "../../components/LayoutPodcast";
import usePodcaster from "../../hooks/usePodcaster";
import { useRouter } from "next/router";
import LoadingMask from "../../components/LoadingMask";
import NoData from "../../components/NoData";
import isEmpty from "ramda/src/isEmpty";

const Podcast = () => {
  const { podcast, handleLoadPodcast, loading } = usePodcaster();
  const router = useRouter();
  const { podcastId } = router.query;

  useEffect(() => {
    handleLoadPodcast(podcastId);
  }, [podcastId]);

  return (
    <>
      {loading ? (
        <LoadingMask />
      ) : podcast && isEmpty(podcast) ? (
        <NoData />
      ) : (
        <LayoutPodcast>
          <Episodes episodes={podcast?.episodes} postId={podcast?.id} />
        </LayoutPodcast>
      )}
    </>
  );
};

export default Podcast;
