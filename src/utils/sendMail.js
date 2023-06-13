import nodemailer from 'nodemailer'
import config from '../config/dotenv.config.js'
import { welcomeTemplate } from '../templates/welcome.js'

class SendMail {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: config.MAIL_HOST,
            port: config.MAIL_PORT,
            secure: false,
            auth: {
                user: config.MAIL_USER,
                pass: config.MAIL_PASS
            },
            attachments: []
        })
    }

    async sendMailSimple(to, subject, newUser) {
        let description
        let title
        switch(subject){
            case 'Welcome to my e-commerce':
                title = 'Welcome to my E-Commerce'
                description = `Welcome ${newUser.first_name}. This is my e-commerce space, I am glad see you`
                break

            default:
                break
        }

        const info = await this.transporter.sendMail({
            from: config.MAIL_FROM,
            to,
            subject,
            html: welcomeTemplate(title, description, newUser)
        })
    }
}

export default new SendMail()