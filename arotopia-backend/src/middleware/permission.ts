import { Request, Response, NextFunction } from 'express'

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const role = req.user?.role

    if (role == "Admin") {
        next()
    }
    else {
        return res.status(401).json({ message: 'Not Admin' })
    }
}



const permissions = {
    isAdmin
}

export default permissions