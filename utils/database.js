const Sequelize  = require('sequelize');

const sequelize = new Sequelize("booking_app" , "root" , "Sumit@1997" , {
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;