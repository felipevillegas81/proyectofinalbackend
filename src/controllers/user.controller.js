import { Router } from "express"
import usersDao from "../daos/dbManager/users.dao.js"
import { hashPassword } from "../utils.js"
import UserDto from "../daos/dtos/users.dto.js"

class UserController {
    async getUser(req, res) {
        const { id } = req.params
        try {
            const user = await usersDao.getById(id)
            res.json(user)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    async createUser(req, res) {
        const { first_name, last_name, email, age, password, role } = req.body

        if (!first_name || !last_name || !email || !age || !password || !role) {
            res.status(400).json( {message: "All fields are required"} )
            return
        }

        try {
            const user = new UserDto({
                first_name,
                last_name,
                email,
                age,
                password: hashPassword(password),
                role,
            })
            
            await sendMail.sendMailSimple(
                user.email,
                'Bienvenido a mi e-commerce',
                `Hola ${user.username}, bienvenido a mi e-commerce`
            )

            const newUser = await usersDao.create(user)
            res.json(newUser)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params
        const user = await usersDao.getAllById(id)
        if (!user) {
            res.status(400).json({message:'User not found'})
            return
        }

        await usersDao.deleteById(id)
        res.json({message: 'User deleted'})
    }
}

export default new UserController()