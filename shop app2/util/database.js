const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopapp-server', 'root', 'Lakki@6625', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
