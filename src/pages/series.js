// BingeLearn — Series Page

import { getSeriesById } from '../data/series.js';
import { renderHeader } from '../components/header.js';
import { isEpisodeRead } from '../state.js';

export function renderSeries(seriesId) {
  const series = getSeriesById(seriesId);
  if (!series) return '<p>Series not found.</p>';

  const seasonsHtml = series.seasons.map(season => {
    const readCount = season.episodes.filter(e =>
      isEpisodeRead(seriesId, season.number, e.number)
    ).length;

    const episodesHtml = season.episodes.map((ep, i) => {
      const isRead = isEpisodeRead(seriesId, season.number, ep.number);
      return `
        <a href="#/series/${seriesId}/season/${season.number}/episode/${ep.number}"
           class="episode-card ${isRead ? 'is-read' : ''} fade-in fade-in-delay-${Math.min(i + 1, 6)}"
           id="ep-card-${ep.number}">
          <span class="episode-number">Episode ${ep.number}</span>
          <h3>${ep.title}</h3>
          <div class="episode-card-nuggets">
            <span>💡</span> ${ep.nuggets.length} knowledge nuggets
          </div>
        </a>
      `;
    }).join('');

    return `
      <div class="season-label">
        Season ${season.number}
        ${readCount > 0 ? `<span class="progress-text">${readCount}/${season.episodes.length} read</span>` : ''}
      </div>
      <div class="episode-grid">
        ${episodesHtml}
      </div>
    `;
  }).join('');

  return `
    ${renderHeader([
      { label: 'Home', path: '/' },
      { label: series.title, path: `/series/${seriesId}` },
    ])}
    <main class="container">
      <section class="series-header fade-in">
        <div class="series-header-genre">${series.genre}</div>
        <h1>${series.title}</h1>
        <p class="series-header-desc">${series.description}</p>
      </section>
      ${seasonsHtml}
    </main>
    <footer class="site-footer">
      <div class="container">
        BingeLearn — Where curiosity meets entertainment.
      </div>
    </footer>
  `;
}
