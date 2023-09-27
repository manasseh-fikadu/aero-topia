import { Request, Response, NextFunction } from 'express'
import logger from '../common/logger'
import { CustomError } from './errorModel'

export default function errorHandler(
    err: TypeError | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    let customError = err

    if (!(err instanceof CustomError)) {
        logger.error(err.stack)
        customError = new CustomError(
            'Oh no, this is embarrassing. We are having internal troubles'
        )
    }

    res.status((customError as CustomError).status).send(customError)
}
