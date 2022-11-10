import Products from "../models/Products"
import { getPagination} from "../libs/getPagination";


//OBTENER TODOS LOS PRODUCTOS
export const findAll = async (req, res) => {
  try {
    console.log(req.query);
    const {size,page,nombre} = req.query

    const condition = nombre ?  {
      nombre : {$regex:new RegExp(nombre), $options: "i"}
    }:{};

    const { limit, offset } = getPagination(page,size);
    const data = await Products.paginate(condition,{},{offset, limit});

    res.json({
      totalItems: data.totalDocs,
      products: data.docs,
      totalPages: data.totalPages,
      currentPage : data.page - 1
    });
  } catch (error) {
    res.status(500).json({
      message : error.message || 'something goes wrong retrieving Products :('
    });
  }
};


//CREAR UN PRODUCTO
export const createProducts = async (req, res) => {

  if(!req.body.nombre || !req.body.categoria || !req.body.precio){
    return res.status(400).send({ message : ' Content cannot be empty'});
  }
  try {
    const newProduct = new Products({
      nombre: req.body.nombre,
      categoria: req.body.categoria,
      precio: req.body.precio
    });
    const productSaved = await newProduct.save();
    res.json(productSaved);
  } catch (error) {
    res.status(500).json({
      message : error.message || 'something goes wrong creating a Product :('
    });
  }
};


//OBTENER UN PRODUCTO
export const findOneProduct = async (req, res) => {
  const { id } = req.params.id;
  try {
    const prod = await Products.findById(id);

    if(!prod){
      return res.status(404).json({ message: `Product with id ${id} does not exists` });
    }
    res.json(prod); 

    //throw new Error('custom Error');

  } catch (error) {
    res.status(500).json({
      message : error.message || 'something goes wrong retrieving a Product :('
    });
  }
}


//ELIMINAR PRODUCTO
export const deleteProduct = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id)
    res.json({
      message: "Product were deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message : error.message || `Cannot delete product with id:${id}`});
    }
}

//ACTUALIZAR PRODUCTO
export const updateProduct = async (req, res) => {
  try {
    const update = await Products.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: 'Product updated successfully ' });
  } catch (error) {
    console.log(error);
  }
}
