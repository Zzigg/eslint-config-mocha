module.exports = {
  '*.js': 'npm run compliance:eslint',
  'package.json': ['npm run security:outdated', 'npm run security:nsp'],
};
