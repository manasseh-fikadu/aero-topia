import { Router } from 'express'
import { auth } from '../../middleware/auth'
import permission  from '../../middleware/permission'
import controller from './controller'
import { fileUpload } from '../../services/cloudinary/upload-via-stream'




const router: Router = Router()
router.route('/')
    .get(controller.getAll)
    .post(auth, permission.isAdmin, controller.create_work)

router.route('/media').post(auth, permission.isAdmin, fileUpload.single('media'), controller.upload);
router.route('/:id')
    .put(auth, permission.isAdmin, controller.update)
    .delete(auth, permission.isAdmin, controller.delete_works)



export default router