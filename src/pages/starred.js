// BingeLearn — Starred Nuggets Page

import { renderHeader } from '../components/header.js';
import { getStarredNuggets } from '../state.js';
import { getAllNuggets } from '../data/series.js';
import { renderNuggetCard, initNuggetInteractions } from '../components/nugget-card.js';

export function renderStarred() {
  const starredIds = getStarredNuggets();
  const allNuggets = getAllNuggets();
  const starredNuggets = allNuggets.filter(n => starredIds.includes(n.id));

  let contentHtml;
  if (starredNuggets.length === 0) {
    contentHtml = `
      <div class="starred-empty fade-in">
        <div class="starred-empty-icon">☆</div>
        <h3>No starred nuggets yet</h3>
        <p class="text-muted" style="margin-top: 0.5rem;">
          Click the star on any knowledge nugget to save it here for later.
        </p>
      </div>
    `;
  } else {
    // Group by series + episode
    const groups = {};
    for (const n of starredNuggets) {
      const key = `${n.seriesTitle} · S${n.seasonNumber} E${n.episodeNumber}: ${n.episodeTitle}`;
      if (!groups[key]) {
        groups[key] = { label: key, seriesId: n.seriesId, seasonNumber: n.seasonNumber, episodeNumber: n.episodeNumber, nuggets: [] };
      }
      groups[key].nuggets.push(n);
    }

    contentHtml = Object.values(groups).map(group => {
      const nuggetsHtml = group.nuggets.map((n, i) => renderNuggetCard(n, i)).join('');
      return `
        <div class="starred-group-title">
          <a href="#/series/${group.seriesId}/season/${group.seasonNumber}/episode/${group.episodeNumber}">${group.label}</a>
        </div>
        ${nuggetsHtml}
      `;
    }).join('');
  }

  return `
    ${renderHeader([
      { label: 'Home', path: '/' },
      { label: 'Starred', path: '/starred' },
    ])}
    <main class="container container--narrow">
      <section class="starred-page-header fade-in">
        <h1>★ Starred Nuggets</h1>
        <p class="text-secondary">Your saved knowledge nuggets for quick reference.</p>
      </section>
      ${contentHtml}
    </main>
    <footer class="site-footer" style="margin-top: 4rem;">
      <div class="container">
        BingeLearn — Where curiosity meets entertainment.
      </div>
    </footer>
  `;
}

export function initStarredPage() {
  initNuggetInteractions();
}
