const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000;
const bodyParser = require('body-parser')

const products = [
  { section: 'MacBook', items: ['MacBook', 'MacBook Air', 'MacBook Pro', 'iMac', 'iMac Pro', 'Mac Pro', 'Mac mini', 'Accessories', 'High Sierra'] },
  { section: 'iPad', items: ['iPad Pro', 'iPad', 'iPad mini 4', 'iOS 11', 'Accessories'] },
  { section: 'iPhone', items: ['iPhone X', 'iPhone 8', 'iPhone 7', 'iPhone 6s', 'iPhone SE', 'iOS 11', 'Accessories'] }
]


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))


//-------------------------------enrutador------------------------------
app.get('/', function (req, res) {
    res.render('1home')
  })

app.get('/productos', function (req, res) {
  res.render('2productos')
})

app.get('/exclusivoAluve', function (req, res) {
  res.render('3exclusivoAluve')
})

app.get('/servicios', function (req, res) {
  res.render('4servicios')
})

app.get('/nuestrosTrabajos', function (req, res) {
  res.render('5nuestrosTrabajos')
})

//------------------------------------------------------------------------- 

app.get('/products', function (req, res) {
  res.render('products', { products: products, selected: {products: true}})
})



app.get('/products/:id', function (req, res) {
  const id = req.params.id
  const product = products[id]
  res.render('product', { product: product})
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/contact', function (req, res) {
  res.render('contact', { selected: {contact: true}})
})

app.post('/contact/submitporpost', function (req, res) {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const country = req.body.country
  const subject = req.body.subject
  const username = req.body.username
  const password = req.body.password

  res.send(`
    Nombre: ${firstname}
    Apellido: ${lastname}
    País: ${country}
    Mensaje: ${subject}
    Username: ${username}
    Password: ${password}
  `)
})

app.listen(port, (err) => {  
  if (err) {
      return console.log('Algo jodido ha pasado', err)
  }
  
  console.log(`El servidor esta siendo escuchado en el puerto ${port}`)
})