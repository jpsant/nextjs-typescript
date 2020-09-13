const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
  lng: 'pt-BR',
  defaultLanguage: 'pt-BR',
  otherLanguages: ['en-US'],
  localePath: path.resolve('./public/static/locales'),
  strictMode: false,
});
