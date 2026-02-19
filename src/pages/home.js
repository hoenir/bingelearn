// BingeLearn — Home Page

import { allSeries } from '../data/series.js';
import { renderHeader } from '../components/header.js';
import { getReadEpisodes } from '../state.js';

export function renderHome() {
  const readEpisodes = getReadEpisodes();

  const seriesCardsHtml = allSeries.map((series, i) => {
    const totalEpisodes = series.seasons.reduce((sum, s) => sum + s.episodes.length, 0);
    const totalNuggets = series.seasons.reduce((sum, s) =>
      sum + s.episodes.reduce((eSum, e) => eSum + e.nuggets.length, 0), 0
    );
    const readCount = readEpisodes.filter(r => r.startsWith(series.id + ':')).length;

    return `
      <a href="#/series/${series.id}" class="series-card fade-in fade-in-delay-${i + 1}" id="series-card-${series.id}">
        <div class="series-card-banner" style="background: ${series.bannerGradient};">
          ${series.bannerImage ? `<img class="series-card-banner-img" src="${import.meta.env.BASE_URL}${series.bannerImage.replace(/^\//, '')}" alt="${series.title}" />` : ''}
          <div class="series-card-banner-title">${series.title}</div>
        </div>
        <div class="series-card-body">
          <div class="series-card-genre">${series.genre}</div>
          <p class="series-card-desc">${series.tagline}</p>
          <div class="series-card-meta">
            <span>${totalEpisodes} episodes</span>
            <span class="dot"></span>
            <span>${totalNuggets} nuggets</span>
            ${readCount > 0 ? `<span class="dot"></span><span>${readCount}/${totalEpisodes} read</span>` : ''}
          </div>
        </div>
      </a>
    `;
  }).join('');

  return `
    ${renderHeader()}
    <main class="container">
      <section class="hero">
        <h1 class="hero-title fade-in">Binge.<br/><span class="accent">Learn.</span></h1>
        <p class="hero-tagline fade-in fade-in-delay-1">Real history, science & culture — discovered through the TV series you love.</p>
        <div class="spoiler-notice fade-in fade-in-delay-2">
          <span class="emoji">🍿</span> Watch first, learn second — episodes may contain spoilers
        </div>
      </section>
      <section>
        <h2 class="section-title fade-in fade-in-delay-3">Explore Series</h2>
        <div class="series-grid">
          ${seriesCardsHtml}
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container">
        BingeLearn — Where curiosity meets entertainment. Content is for educational purposes.
      </div>
    </footer>
  `;
}
