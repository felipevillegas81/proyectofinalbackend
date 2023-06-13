import { Router } from "express"
import usersDao from "../daos/dbManager/users.dao.js"
import { hashPassword } from "../utils.js"

class UsersController {
    async getUsers(req, res) {
        try {
            const users = await usersDao.getAll()
            res.json(users)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
}

export default new UsersController()