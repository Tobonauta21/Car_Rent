//Import 
    import * as db from './conn'

//Tabela de carros
    const Rent = db.sequelize.define('car',{
        carroAlugado:{type:db.Sequelize.STRING,allowNull:false},
        tempoAluguel:{type:db.Sequelize.STRING,allowNull:false},
        valorAluguel:{type:db.Sequelize.STRING,allowNull:false},
        multa:{type:db.Sequelize.STRING,allowNull:false}
    })

    Rent.sync()

//Export
    export {Rent}