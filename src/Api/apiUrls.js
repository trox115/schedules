export const apiUrls = {
  content: '/content',
  checkout: '/checkout/create',
  schedules: '/schedules',
  confirm: '/success'
}

export const replaceUrls = (url, obj) => {
  const pattern = /:[\w]+/ig; // :property
  return url.replace(pattern, (token) => obj[token.substr(1)] || '');
};
