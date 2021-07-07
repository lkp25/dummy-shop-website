const express = require('express');
const path = require('path');

require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

const rootDir = require('./util/path')

const {mongoConnect} = require('./util/mongoDBconnect')
  
mongoConnect( ()=>{
    console.log('connected');
})

const publicRoutes = require('./routes/public')
app.use(publicRoutes)

const newOrderRoutes = require('./routes/new-order-data')
app.use(newOrderRoutes)

const adminMainRoutes = require('./routes/admin-main')
app.use(adminMainRoutes)

const adminQuestionsRoutes = require('./routes/admin-questions')
app.use(adminQuestionsRoutes)

const adminProductsRoutes = require('./routes/admin-products')
app.use(adminProductsRoutes)

const adminOrdersRoutes = require('./routes/admin-orders')
app.use(adminOrdersRoutes)


app.use('/', (req, res, next) =>{
    console.log('no such address');
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})


app.listen(5000)