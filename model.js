const Sequelize = require('sequelize')
const { sequelize } =  require('./db-connection')

const Name = sequelize.define('names', {
    name: Sequelize.STRING,
    amount: Sequelize.INTEGER,
})

Name.sync()

module.exports =  { Name }