//Import 
    import * as db from './conn.js'

//Tabela de carros
    const User = db.sequelize.define('car',{
        nome:{type:db.Sequelize.STRING,allowNull:false},
        email:{type:db.Sequelize.STRING,allowNull:false},
        celular:{type:db.Sequelize.STRING,allowNull:false},
        endereco:{type:db.Sequelize.STRING,allowNull:false},
        cpf:{type:db.Sequelize.STRING,allowNull:false},
        rg:{type:db.Sequelize.STRING,allowNull:false},
        nivelConta:{type:db.Sequelize.STRING,allowNull:false}
    })

    User.sync()

//Export
    export {User}