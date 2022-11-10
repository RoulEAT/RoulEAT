const legacyBaseUrl =
  window.location.protocol +
  '//' +
  window.location.hostname +
  (window.location.port ? ':' + window.location.port : '');
export const baseURL = window.location.origin || legacyBaseUrl;

export const buildUrl = (path: string) => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:8000' + path;
  }
  return legacyBaseUrl + path;
};
