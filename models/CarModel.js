//Import 
    import * as db from './conn.js'

//Tabela de carros
    const Car = db.sequelize.define('car',{
        modelo:{type:db.Sequelize.STRING,allowNull:false},
        placa:{type:db.Sequelize.STRING,allowNull:false},
        cor:{type:db.Sequelize.STRING,allowNull:false},
        precoAluguel:{type:db.Sequelize.STRING,allowNull:false},
        qtd:{type:db.Sequelize.STRING,allowNull:false}
    })

    Car.sync()

//Export
    export {Car}