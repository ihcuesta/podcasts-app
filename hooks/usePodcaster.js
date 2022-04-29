import { useContext } from "react";
import PodcasterContext from "../context/PodcasterProvider";

const usePodcaster = () => {
  return useContext(PodcasterContext);
};

export default usePodcaster;
