const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'data/db.db',
    logging: false,
    define: {
        timestamps: false
    }
})

module.exports =  { sequelize }