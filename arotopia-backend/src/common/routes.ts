import { Router } from "express";

const router: Router = Router()

import userRoutes from '../resources/user/route'
import aboutUsRoutes from '../resources/about_us/route'
import contact_usRoutes from '../resources/contact_us/route'
import partnerRoutes from '../resources/partner/route'
import serviceRoutes from '../resources/service/route'
import workRoutes from '../resources/work/route'



router.use('/user', userRoutes)
router.use('/about_us', aboutUsRoutes)
router.use('/contact_us', contact_usRoutes)
router.use('/partner', partnerRoutes)
router.use('/service',  serviceRoutes)
router.use('/work', workRoutes)


export default router

