const { Name } = require('./model')
let jsonData = require('./data/names.json')

async function updateDB() {

    await Name.sync({ force: true })

    try {
        await Name.bulkCreate(jsonData.names)
        const count = await Name.count()
        console.log(`Data import done, ${count} names added.`)
    } catch {
        console.log('Error with data import.')
    }
}

updateDB()