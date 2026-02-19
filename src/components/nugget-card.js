// BingeLearn — Nugget Card Component

import { isNuggetStarred, toggleStarNugget } from '../state.js';

const epistemicLabels = {
  'accurate': { label: '✓ Accurate', cls: 'accurate' },
  'inaccurate': { label: '✗ Inaccurate', cls: 'inaccurate' },
  'inspired-by': { label: '~ Inspired By', cls: 'inspired-by' },
  'unknown': { label: '? Unknown', cls: 'unknown' },
  'bonus-insight': { label: '★ Bonus Insight', cls: 'bonus-insight' },
};

export function renderNuggetCard(nugget, index) {
  const starred = isNuggetStarred(nugget.id);
  const ep = epistemicLabels[nugget.epistemicTag] || epistemicLabels['unknown'];

  const topicTagsHtml = (nugget.topicTags || []).map(t =>
    `<span class="topic-tag">${t}</span>`
  ).join('');

  const sourcesHtml = nugget.sources && nugget.sources.length > 0 ? `
    <div class="nugget-sources">
      <div class="nugget-sources-label">Further Reading</div>
      <ul class="nugget-source-list">
        ${nugget.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`).join('')}
      </ul>
    </div>
  ` : '';

  return `
    <article class="nugget-card fade-in fade-in-delay-${Math.min(index + 1, 6)}" id="nugget-${nugget.id}">
      <div class="nugget-header" data-nugget-toggle="${nugget.id}">
        <div class="nugget-header-left">
          <div class="nugget-tags">
            <span class="epistemic-tag epistemic-tag--${ep.cls}">${ep.label}</span>
            ${topicTagsHtml}
          </div>
          <h3 class="nugget-title">${nugget.title}</h3>
          <div class="nugget-expand-indicator" data-indicator="${nugget.id}">
            <span data-chevron="${nugget.id}">▸</span> Read more
          </div>
        </div>
        <button class="nugget-star ${starred ? 'is-starred' : ''}" data-star="${nugget.id}" title="${starred ? 'Unstar' : 'Star for later'}">
          ${starred ? '★' : '☆'}
        </button>
      </div>
      <div class="nugget-body collapsed" data-nugget-body="${nugget.id}">
        ${nugget.content}
        ${sourcesHtml}
      </div>
    </article>
  `;
}

export function initNuggetInteractions() {
  // Toggle expand/collapse
  document.querySelectorAll('[data-nugget-toggle]').forEach(header => {
    header.addEventListener('click', (e) => {
      // Don't toggle if clicking the star button
      if (e.target.closest('[data-star]')) return;
      const id = header.dataset.nuggetToggle;
      const body = document.querySelector(`[data-nugget-body="${id}"]`);
      const indicator = document.querySelector(`[data-indicator="${id}"]`);
      const chevron = document.querySelector(`[data-chevron="${id}"]`);
      if (body) {
        body.classList.toggle('collapsed');
        if (body.classList.contains('collapsed')) {
          indicator.innerHTML = '<span>▸</span> Read more';
        } else {
          indicator.innerHTML = '<span>▾</span> Collapse';
        }
      }
    });
  });

  // Star toggle
  document.querySelectorAll('[data-star]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.star;
      const nowStarred = toggleStarNugget(id);
      btn.classList.toggle('is-starred', nowStarred);
      btn.innerHTML = nowStarred ? '★' : '☆';
      btn.title = nowStarred ? 'Unstar' : 'Star for later';
      // Update header starred count
      updateStarredCount();
    });
  });
}

function updateStarredCount() {
  const link = document.getElementById('starred-link');
  if (link) {
    const count = (JSON.parse(localStorage.getItem('bingelearn_starred_nuggets') || '[]')).length;
    link.innerHTML = `★ Starred ${count > 0 ? `<span class="starred-count">${count}</span>` : ''}`;
  }
}
