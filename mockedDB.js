module.exports = () => {
  const feed = require('./src/services/mockDB/data.json');
  return {feed: [...feed]};
};
