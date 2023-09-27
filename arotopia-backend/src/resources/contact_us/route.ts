import { Router } from 'express'
import { auth } from '../../middleware/auth'
import permission from '../../middleware/permission'
import controller from './controller'



const router: Router = Router()
router.route('/').get(auth, permission.isAdmin, controller.getAll)
router.route('/send_email').post(controller.send_email)




export default router