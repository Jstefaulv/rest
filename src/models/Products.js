import {Schema, model} from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = new Schema({
  nombre:{
    type: String,
    required : true,
    trim: true,
  },
  categoria:{
    type: String,
    required : true,
    trim: true,
  },
  precio :{
    type: Number,
    required : true,
  },
},
{
  versionKey: false,
  timestamps: true
});
productSchema.plugin(mongoosePaginate);
export default model('Products',productSchema)