//Import 
    import express from 'express'
    import dotenv from 'dotenv'
    import {engine} from 'express-handlebars'
    import bodyparser from 'body-parser'
    import session from 'express-session'
    import path from 'path'
    import flash from 'connect-flash'
    import { fileURLToPath } from 'url'
    import * as User from './routes/UserRouter.js'
    import * as Car from './routes/CarRouter.js'

//Config
    const app = express()
    dotenv.config()
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    //Session
        app.use(session({
            secret: 'nodejs',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use(function(req,res,next){
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg') 
            res.locals.error = req.flash('error')
            next()
        })
    //BodyParser
        app.use(bodyparser.urlencoded({extended:true}))
        app.use(bodyparser.json())
    //Handlebars
        app.engine('handlebars', engine({defaultLayout:'main', runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }}))
        app.set('view engine', 'handlebars')
    //Public
        app.use(express.static(path.join(__dirname, 'public')))
    
    const PORT = process.env.PORT

    //Routes
        app.use('/user',User.router)
        app.use('/car',Car.router)
        
    app.listen(PORT||3000,()=>{
        console.log(`Ouvindo em localhost:${PORT}`)
    })

