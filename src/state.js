// BingeLearn — State Management (localStorage)

const STORAGE_KEY_READ = 'bingelearn_read_episodes';
const STORAGE_KEY_STARRED = 'bingelearn_starred_nuggets';

function getJSON(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : fallback;
  } catch {
    return fallback;
  }
}

function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getReadEpisodes() {
  return getJSON(STORAGE_KEY_READ, []);
}

export function markEpisodeRead(seriesId, seasonNum, episodeNum) {
  const key = `${seriesId}:s${seasonNum}:e${episodeNum}`;
  const read = getReadEpisodes();
  if (!read.includes(key)) {
    read.push(key);
    setJSON(STORAGE_KEY_READ, read);
  }
}

export function isEpisodeRead(seriesId, seasonNum, episodeNum) {
  const key = `${seriesId}:s${seasonNum}:e${episodeNum}`;
  return getReadEpisodes().includes(key);
}

export function getStarredNuggets() {
  return getJSON(STORAGE_KEY_STARRED, []);
}

export function toggleStarNugget(nuggetId) {
  const starred = getStarredNuggets();
  const idx = starred.indexOf(nuggetId);
  if (idx > -1) {
    starred.splice(idx, 1);
  } else {
    starred.push(nuggetId);
  }
  setJSON(STORAGE_KEY_STARRED, starred);
  return starred.includes(nuggetId);
}

export function isNuggetStarred(nuggetId) {
  return getStarredNuggets().includes(nuggetId);
}

export function getStarredCount() {
  return getStarredNuggets().length;
}
