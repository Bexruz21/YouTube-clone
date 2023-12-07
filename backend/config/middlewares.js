module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public', // Удостоверьтесь, что strapi::public находится в правильном месте
];
