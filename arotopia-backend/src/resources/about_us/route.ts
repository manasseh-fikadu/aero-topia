import { Router } from 'express'
// import { validateJoi, Schemas } from '../../middleware/validate'
import { auth } from '../../middleware/auth'
import permission  from '../../middleware/permission'
import controller from './controller'
import { fileUpload } from '../../services/cloudinary/upload-via-stream'




const router: Router = Router()
router.route('/')
    .get(controller.getAll)
    .put(auth, permission.isAdmin, controller.update)
    // .post(controller.create_about_us)
router.route('/logo').post(auth, permission.isAdmin, fileUpload.single('logo'), controller.upload)


export default router