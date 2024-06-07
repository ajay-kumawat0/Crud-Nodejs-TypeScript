import express from 'express'
import { db} from '../../Config/db.config'
import { router } from '../Routes/posts.routes'

const app = express()
const port = 8001;

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//routes
app.use('/api/v1/posts', router)

//db connection then server connection
db.then(() => {
    app.listen(port, () => console.log(`Server is listening on port ${port}`))
})