const express = require('express')
const { Op } = require('sequelize')
const path = require('path')
const cors = require('cors')
const { Name } = require('./model')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
})

app.get('/api/names', (req, res) => {
  Name.findAll({
    attributes: ['name'],
    order: [['name', 'ASC']]
  })
  .then(result => res.send(result))
  .catch(error => console.log(error))
})

app.get('/api/amounts', (req, res) => {

  if (req.query.name || req.query.name === '') {
    Name.findOne({
      where: {
        name: {
          [Op.like]: [req.query.name.trim()]
        }
      },
      attributes: ['name','amount']
    })
    .then(result => {
      if (result) {
        res.send(result)
      } else {
        res.status(404).send(`Name ${req.query.name} not found.`)
      }
    })
    .catch(error => console.log(error))
  } else {
    Name.findAll({
      attributes: ['name','amount'],
      order: [
        ['amount', 'DESC'],
        ['name', 'ASC']
      ]
    })
    .then(result => res.send(result))
    .catch(error => console.log(error))
  }
})

app.get('/api/totalamount', (req, res) => {
  Name.sum('amount')
  .then(result => res.send({ 'total': result }))
  .catch(error => console.log(error))
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})