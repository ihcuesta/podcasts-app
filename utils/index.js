import moment from "moment";

export const formatDate = (date) => moment().format("DD/MM/YYYY");

const pad = (num) => ("0" + num).slice(-2);
export const formatDuration = (secs) => {
  if (String(secs).includes(":")) {
    return secs;
  }
  let minutes = Math.floor(secs / 60);
  secs = secs % 60;
  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  hours = hours > 0 ? `${hours}:` : "";
  return `${hours}${minutes}:${pad(secs)}`;
};

export const getLocal = (entity) => window.localStorage.getItem(entity);
export const getLocalParsed = (entity) =>
  JSON.parse(window.localStorage.getItem(entity));
export const setLocal = (entity, data) =>
  window.localStorage.setItem(entity, JSON.stringify(data));

export const includesStr = (prop, str) =>
  prop.toLowerCase().includes(str.toLowerCase());

export const dateTimestamp = (date) => moment(date).valueOf();
export const last24h = (entity) => {
  return dateTimestamp(new Date()) - getLocalParsed(entity) <= 86400000;
};
