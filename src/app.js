import express from 'express';
import morgan from 'morgan';
 import cors from 'cors';
import ProductRoutes from './routes/product.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
//app.get('/',(req,res) =>{
//});

app.use('/', ProductRoutes);

export default app;
