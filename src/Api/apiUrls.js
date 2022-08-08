export const apiUrls = {
  content: '/content'
}

export const replaceUrls = (url, obj) => {
  const pattern = /:[\w]+/ig; // :property
  return url.replace(pattern, (token) => obj[token.substr(1)] || '');
};
