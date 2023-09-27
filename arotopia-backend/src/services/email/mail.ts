import nodeMailer from 'nodemailer'
import logger from '../../common/logger'

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    },
    
})

export const sendMail = async (credentials: any) => {
    try {
        let info = await transporter.sendMail({
            from:process.env.EMAIL,
            to: credentials.to,
            subject: credentials.subject,
            html: credentials.html
           
        })
        return info
    } catch (error) {
        console.log(error);
        logger.error({ issue: 'email service down', error })
    }
}