import { useState, createContext } from "react";
import { getPodcasts, getPodcast, getEpisodes } from "../config/api";
import { checkLSEntity } from "../utils";

const PodcasterContext = createContext();

const PodcasterProvider = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [contextPodcast, setcontextPodcast] = useState({});

  const handleLoadPodcasts = () =>
    checkLSEntity("podcasts", setPodcasts, getPodcasts);

  const handleLoadPodcast = (id) =>
    checkLSEntity(`podcast${id}`, setcontextPodcast, getPodcast, id);

  return (
    <PodcasterContext.Provider
      value={{
        podcasts,
        handleLoadPodcasts,
        contextPodcast,
        handleLoadPodcast,
      }}
    >
      {children}
    </PodcasterContext.Provider>
  );
};

export { PodcasterProvider };

export default PodcasterContext;
