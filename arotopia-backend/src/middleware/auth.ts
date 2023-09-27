import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import dataAccessLayer from '../common/dal'
import User from '../resources/user/model'

const UserDAL = dataAccessLayer(User)

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtToken = req.headers.authorization || ""
        const token = jwtToken.toString().split(' ')[1]
        const secret = process.env.JWT_SECRET || "499238@@#adnnc%%"
        const decoded = verify(token, secret)
        const user = await UserDAL.getAll({ _id: decoded.sub })

        if (!user) return res.status(401).json({ message: 'Not authorized' })

        if (!user[0].isActive)
            return res
                .status(401)
                .json({ message: 'Account is not Active' })

        req.user = user[0]
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Not authorized' })
    }
}