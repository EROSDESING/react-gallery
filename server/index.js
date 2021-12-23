import express from 'express'
import fileUpload from 'express-fileupload'

import indexRoutes from './routes/index.routes'
import imagesRoutes from './routes/images.routes'

import config from './config'

const app = express()
app.set('port', process.env.PORT || 4000)
console.log(process.env.HELLO)

app.use(
  fileUpload({
    tempFileDir: '/temp',
  }),
)
app.use(indexRoutes)
app.use(imagesRoutes)

app.get('/', (req, res) => res.send('hello world'))

app.listen(app.get('port'))

console.log('server on port:', app.get('port'))
