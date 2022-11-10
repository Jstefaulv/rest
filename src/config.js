import {config} from "dotenv"
config();

export default {
  mongodbURL : process.env.DB_MONGO || 'mongodb://localhost/products',
};