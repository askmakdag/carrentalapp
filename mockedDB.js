module.exports = () => {
  const cars = require('./src/services/mockDB/data.json');
  return {cars: [...cars]};
};
