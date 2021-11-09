//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Order = require('./models/Order')
const OrderLine = require('./models/OrderLine')
const OrderStatus = require('./models/OrderStatus')
const Product = require('./models/Product')

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Order,
    OrderLine,
    OrderStatus,
    Product
  },
}
