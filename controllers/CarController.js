//Import
    import {Car} from '../models/CarModel.js'
    import * as yup from 'yup'

//Interface de carro
    const schema = new yup.ObjectSchema({
        nome:yup.string().required('Nome do carro é obrigatório'),
        placa:yup.number().required('Placa do carro é obrigatória'),
        cor:yup.string(),
        precoAluguel:yup.number().required('Preço do carro é obrigatório'),
        qtd:yup.number().required('Quantidade é obrigatória'),
    })
//Function
    export const AddCar = async (req,res)=>{
        const dados = req.body
        try{
            const car = await schema.validate({
                nome:dados.nome,
                placa:dados.placa,
                cor:dados.cor,
                precoAluguel:dados.preco,
                qtd:dados.qtd,
            },{ abortEarly:false})

            await Car.create(car)

            return req.flash('success_msg','Carro adicionando a plataforma'),res.redirect('/user/cad')
        }catch(err){
            console.log(err)
            req.flash('error_msg','Erro ao adicionar carro')
        }
    }

    export const RemoveCar = async (req,res)=>{

    }

    export const EditCar = async (req,res)=>{

    }


