// BingeLearn — Main Entry Point

import './style.css';
import { addRoute, onNotFound, startRouter } from './router.js';
import { renderHome } from './pages/home.js';
import { renderSeries } from './pages/series.js';
import { renderEpisode, initEpisodePage } from './pages/episode.js';
import { renderStarred, initStarredPage } from './pages/starred.js';

const app = document.getElementById('app');

function mount(html, postRender) {
  app.innerHTML = html;
  window.scrollTo(0, 0);
  if (postRender) postRender();

  // Sticky header scroll shadow
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}

// Routes
addRoute('/', () => {
  mount(renderHome());
});

addRoute('/series/:id', (params) => {
  mount(renderSeries(params.id));
});

addRoute('/series/:id/season/:season/episode/:episode', (params) => {
  mount(
    renderEpisode(params.id, params.season, params.episode),
    initEpisodePage
  );
});

addRoute('/starred', () => {
  mount(renderStarred(), initStarredPage);
});

onNotFound(() => {
  mount(`
    <div style="text-align:center; padding: 6rem 2rem;">
      <h1 style="font-family: var(--font-display); font-size: 3rem;">404</h1>
      <p style="color: var(--text-muted); margin-top: 1rem;">Page not found. <a href="#/">Go home</a></p>
    </div>
  `);
});

// Start
startRouter();
