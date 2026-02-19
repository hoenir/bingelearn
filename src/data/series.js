// BingeLearn — Series data index

import { theLastKingdom } from './the-last-kingdom.js';
import { rome } from './rome.js';
import { breakingBad } from './breaking-bad.js';
import { houseMd } from './house-md.js';

export const allSeries = [theLastKingdom, rome, breakingBad, houseMd];

export function getSeriesById(id) {
  return allSeries.find(s => s.id === id);
}

export function getEpisode(seriesId, seasonNum, episodeNum) {
  const series = getSeriesById(seriesId);
  if (!series) return null;
  const season = series.seasons.find(s => s.number === parseInt(seasonNum));
  if (!season) return null;
  return season.episodes.find(e => e.number === parseInt(episodeNum));
}

export function getSeason(seriesId, seasonNum) {
  const series = getSeriesById(seriesId);
  if (!series) return null;
  return series.seasons.find(s => s.number === parseInt(seasonNum));
}

export function getAllNuggets() {
  const nuggets = [];
  for (const series of allSeries) {
    for (const season of series.seasons) {
      for (const episode of season.episodes) {
        for (const nugget of episode.nuggets) {
          nuggets.push({
            ...nugget,
            seriesId: series.id,
            seriesTitle: series.title,
            seasonNumber: season.number,
            episodeNumber: episode.number,
            episodeTitle: episode.title,
          });
        }
      }
    }
  }
  return nuggets;
}
