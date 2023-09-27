import { Router } from 'express'
import { auth } from '../../middleware/auth'
import permission  from '../../middleware/permission'
import controller from './controller'
import { fileUpload } from '../../services/cloudinary/upload-via-stream'




const router: Router = Router()
router.route('/login').post(controller.login)
router.route('/signup').post(controller.create_user)
router.route('/profilePhoto/:id').post(auth, permission.isAdmin, fileUpload.single('profilePhoto'), controller.upload);
router.route('/:id')
    .put(auth, permission.isAdmin, controller.update)
    .delete(auth, permission.isAdmin, controller.delete_user)



export default router