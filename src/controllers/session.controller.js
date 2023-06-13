import { Router } from "express"
import passport from "passport"
import userModel from '../models/user.model.js'
import { comparePassword, hashPassword } from "../utils.js"

class SessionController {
    async login (req,res) {
        if(!req.user) {
            return res.status(404).json({ message: 'User not found' })
            
        }
    
        req.session.user = {
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            email: req.user.email,
            age: req.user.age,
            role: req.user.role
        }
    
        res.status(200).redirect('/profile')
    }

    failLogin (req,res) {
        res.status(401).json({ message: 'You are not authenticated' })
    }

    async register (req, res) {
        return res.status(201).redirect('/login')
    }

    failregister (req, res) {
        res.status(401).json({ message: 'You are not registered' })
    }

    async restore (req, res) {
        const { email, password } = req.body
    
        try{
            const user = await userModel.findOne({ email })
    
            if(!user) {
                return res.status(404).json({ message: 'User not found' })
                
            }
    
            if(comparePassword(user, password)){
                return res.json({ message: 'Passwords is the same' })
            }
    
            user.password = hashPassword(password)
            await user.save()
            return res.json({ message: 'Passwords updated' })
        } catch(error) {
            res.status(500).json({ message: error.message })
        }
    }

    async logout (req, res) {
        req.session.destroy()
        res.redirect('/login')
    }
}

export default new SessionController()