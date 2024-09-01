//Import 
    import Router from 'express'
    import * as Car from '../controllers/CarController.js'
    const router = Router()
//Routes
    router.get('/cad',(req,res)=>{
        res.render('src/cadCar')
    })

    export {router}
    