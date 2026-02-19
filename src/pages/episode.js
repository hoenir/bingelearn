// BingeLearn — Episode Page

import { getSeriesById, getEpisode, getSeason } from '../data/series.js';
import { renderHeader } from '../components/header.js';
import { renderNuggetCard, initNuggetInteractions } from '../components/nugget-card.js';
import { markEpisodeRead } from '../state.js';

export function renderEpisode(seriesId, seasonNum, episodeNum) {
  const series = getSeriesById(seriesId);
  const season = getSeason(seriesId, seasonNum);
  const episode = getEpisode(seriesId, seasonNum, episodeNum);

  if (!series || !season || !episode) return '<p>Episode not found.</p>';

  // Auto-mark as read
  markEpisodeRead(seriesId, parseInt(seasonNum), parseInt(episodeNum));

  const epNum = parseInt(episodeNum);
  const prevEp = season.episodes.find(e => e.number === epNum - 1);
  const nextEp = season.episodes.find(e => e.number === epNum + 1);

  const nuggetsHtml = episode.nuggets.map((nugget, i) =>
    renderNuggetCard(nugget, i)
  ).join('');

  const prevLink = prevEp
    ? `<a class="episode-nav-btn" href="#/series/${seriesId}/season/${seasonNum}/episode/${prevEp.number}">← Episode ${prevEp.number}</a>`
    : `<span class="episode-nav-btn disabled">← Previous</span>`;

  const nextLink = nextEp
    ? `<a class="episode-nav-btn" href="#/series/${seriesId}/season/${seasonNum}/episode/${nextEp.number}">Episode ${nextEp.number} →</a>`
    : `<span class="episode-nav-btn disabled">Next →</span>`;

  return `
    ${renderHeader([
      { label: 'Home', path: '/' },
      { label: series.title, path: `/series/${seriesId}` },
      { label: `S${seasonNum} · E${episodeNum}`, path: `/series/${seriesId}/season/${seasonNum}/episode/${episodeNum}` },
    ])}
    <main class="container container--narrow">
      <section class="episode-header fade-in">
        <div class="episode-meta">${series.title} · Season ${seasonNum}, Episode ${episodeNum}</div>
        <h1>${episode.title}</h1>
      </section>
      <section class="recap-section fade-in fade-in-delay-1">
        <div class="recap-label">Episode Recap</div>
        <p class="recap-text">${episode.recap}</p>
      </section>
      <section class="nuggets-section">
        <div class="nuggets-label fade-in fade-in-delay-2">💡 ${episode.nuggets.length} Knowledge Nuggets</div>
        ${nuggetsHtml}
      </section>
      <nav class="episode-nav fade-in">
        ${prevLink}
        ${nextLink}
      </nav>
    </main>
    <footer class="site-footer">
      <div class="container">
        BingeLearn — Where curiosity meets entertainment.
      </div>
    </footer>
  `;
}

export function initEpisodePage() {
  initNuggetInteractions();
}
