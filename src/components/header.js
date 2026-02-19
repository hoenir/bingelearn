// BingeLearn — Header Component

import { getStarredCount } from '../state.js';
import { navigate, getCurrentPath } from '../router.js';

export function renderHeader(breadcrumbs = []) {
  const starredCount = getStarredCount();
  const crumbsHtml = breadcrumbs.map((c, i) => {
    const isLast = i === breadcrumbs.length - 1;
    if (isLast) {
      return `<span class="breadcrumb-current">${c.label}</span>`;
    }
    return `<a href="#${c.path}" class="breadcrumb-link">${c.label}</a><span class="breadcrumb-sep">›</span>`;
  }).join('');

  return `
    <header class="site-header" id="site-header">
      <div class="container">
        <div class="header-inner">
          <a class="logo" href="#/">Binge<span class="logo-accent">Learn</span></a>
          ${breadcrumbs.length > 0 ? `<nav class="breadcrumb">${crumbsHtml}</nav>` : ''}
          <div class="header-actions">
            <a class="starred-link" href="#/starred" id="starred-link">
              ★ Starred ${starredCount > 0 ? `<span class="starred-count">${starredCount}</span>` : ''}
            </a>
          </div>
        </div>
      </div>
    </header>
  `;
}
