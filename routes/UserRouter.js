//Import
    import express from 'express'
    import * as User from '../controllers/UserController.js'
    const router = express.Router()

    router.get('/cad',(req,res)=>{
        res.render('src/Cad')
    })

    router.post('/register',User.AddUser)

//Export
    export {router}