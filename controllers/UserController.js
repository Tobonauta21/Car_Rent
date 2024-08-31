//Import
    import {User} from '../models/UserModel.js'
    import * as yup from 'yup'

    const schema = new yup.ObjectSchema({
        nome: yup.string().required('Nome é obrigatório'),
        email: yup.string().email('Email inválido').required('Email é obrigatório'),
        celular: yup.string().required('Celular é obrigatório'),
        endereco: yup.array().of(yup.string()).required('Endereço é obrigatório'),
        cpf: yup.string().required('CPF é obrigatório'),
        rg: yup.string().required('RG é obrigatório'),
        nivelConta: yup.string().required('Nível da conta é obrigatório'),
    })

//Function
    export const AddUser = async(req,res)=>{
        const dados = req.body
        const endereco = []

        endereco.push(dados.rua)
        endereco.push(dados.cep)
        endereco.push(dados.bairro)
        endereco.push(dados.num)

        dados.nivelConta = 'bronze'

        const resp = await schema.validate({
            nome:dados.nome,
            email:dados.email,
            celular:dados.celular,
            endereco:endereco,
            cpf:dados.cpf,
            rg:dados.rg,
            nivelConta:dados.nivelConta
        })

        if(!resp){
            
        }else{
            try{

            }catch(err){

            }
        }

        console.log(resp)

        res.redirect('/user/cad')
    }