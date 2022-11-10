import {Router} from 'express'
import * as productController from '../controllers/product.controller'

const router = Router()

router.get('/',productController.findAll);
router.post('/', productController.createProducts);
router.get('/:id',productController.findOneProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);

export default router;
