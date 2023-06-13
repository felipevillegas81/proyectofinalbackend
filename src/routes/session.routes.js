import { Router } from "express"
import passport from "passport"
import userModel from '../models/user.model.js'
import { comparePassword, hashPassword } from "../utils.js"
import sessionController from "../controllers/session.controller.js"

const router = Router()

router.get('/github', passport.authenticate('github', {scope: ['user:email'] }))

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    req.session.user = req.user
    res.redirect('/')
})

router.post('/login', passport.authenticate("login", { failureRedirect: '/failLogin' }), sessionController.login)

router.get('/failLogin', sessionController.failLogin)

router.post('/register',passport.authenticate("register", { failureRedirect: '/session/failRegister' }), sessionController.register)

router.get('/failRegister', sessionController.failregister)

router.post('/restore', sessionController.restore)

router.get('/logout', sessionController.logout)

export default router