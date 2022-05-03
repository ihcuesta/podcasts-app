import { useState, createContext } from "react";
import { getPodcasts, getPodcast } from "../config/api";
import {
  getLocal,
  getLocalParsed,
  setLocal,
  includesStr,
  dateTimestamp,
  last24h,
} from "../utils";

const PodcasterContext = createContext();

const PodcasterProvider = ({ children }) => {
  const [podcastsAPI, setPodcastsAPI] = useState([]);
  const [podcasts, setPodcasts] = useState([]);
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLoadPodcasts = (str) => {
    setLoading(true);
    if (str) {
      filterPodcasts(str);
    } else {
      if (getLocal("podcasts") && last24h("datePodcasts")) {
        setPodcastsAPI(getLocalParsed("podcasts"));
        setPodcasts(getLocalParsed("podcasts"));
        setLoading(false);
      } else {
        getPodcasts().then((data) => {
          setLocal("podcasts", data);
          setLocal("datePodcasts", dateTimestamp(new Date()));
          setPodcastsAPI(data);
          setPodcasts(data);
          setLoading(false);
        });
      }
    }
  };

  const handleLoadPodcast = (id) => {
    setLoading(true);
    if (getLocal(`podcast${id}`) && last24h(`datePodcast${id}`)) {
      setPodcast(getLocalParsed(`podcast${id}`));
      setLoading(false);
    } else {
      getPodcast(id).then((data) => {
        setLocal(`podcast${id}`, data);
        setLocal(`datePodcast${id}`, dateTimestamp(new Date()));
        setPodcast(data);
        setLoading(false);
      });
    }
  };

  const filterPodcasts = (str) => {
    const newSearch = podcastsAPI.filter(
      (e) => includesStr(e.author, str) || includesStr(e.title, str)
    );
    setPodcasts(newSearch);
    setLoading(false);
  };

  return (
    <PodcasterContext.Provider
      value={{
        podcasts,
        handleLoadPodcasts,
        podcast,
        handleLoadPodcast,
        loading,
      }}
    >
      {children}
    </PodcasterContext.Provider>
  );
};

export { PodcasterProvider };

export default PodcasterContext;
