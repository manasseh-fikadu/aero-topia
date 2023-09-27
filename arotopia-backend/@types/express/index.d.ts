import Express from 'express-serve-static-core'
import { User } from '../../src/resources/user/interface'
import { Request } from 'express'


declare global {
    namespace Express {
        export interface Request {
            user?: User
        }
    }
}
