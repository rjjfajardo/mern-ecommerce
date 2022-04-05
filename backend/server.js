import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler} from './middleware/errorrMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
const app = express();

connectDB()

app.use(express.json())

 
app.get('/', (req, res) => {
     res.send('API IS running')
})  
     




app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
//app.use('/api/users/profile', userRoutes)


//middlewares

app.use(notFound); // routes that doesnt exist 
app.use(errorHandler);  // product not found 




const PORT = process.env.PORT || 6000;

//app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

app.listen(6000);