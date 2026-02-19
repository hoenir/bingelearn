// BingeLearn — Simple hash router

const routes = [];
let notFoundHandler = null;

export function addRoute(pattern, handler) {
  // Convert pattern like '/series/:id/season/:season/episode/:episode'
  // to a regex with named groups
  const paramNames = [];
  const regexStr = pattern.replace(/:([^/]+)/g, (_, name) => {
    paramNames.push(name);
    return '([^/]+)';
  });
  routes.push({
    regex: new RegExp(`^${regexStr}$`),
    paramNames,
    handler,
  });
}

export function onNotFound(handler) {
  notFoundHandler = handler;
}

export function navigate(path) {
  window.location.hash = path;
}

export function getCurrentPath() {
  return window.location.hash.slice(1) || '/';
}

export function resolve() {
  const path = getCurrentPath();
  for (const route of routes) {
    const match = path.match(route.regex);
    if (match) {
      const params = {};
      route.paramNames.forEach((name, i) => {
        params[name] = decodeURIComponent(match[i + 1]);
      });
      route.handler(params);
      return;
    }
  }
  if (notFoundHandler) notFoundHandler();
}

export function startRouter() {
  window.addEventListener('hashchange', resolve);
  // Initial resolve
  resolve();
}
