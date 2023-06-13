import dotenv from 'dotenv'
dotenv.config()

export default {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    SECRET_SESSION_KEY: process.env.SECRET_SESSION_KEY,

    JWT_SECRET: process.env.JWT_SECRET,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_FROM: process.env.MAIL_FROM,
}