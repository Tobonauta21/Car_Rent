//Import
    import {User} from '../models/UserModel.js'
    import * as yup from 'yup'

    const schema = new yup.ObjectSchema({
        nome: yup.string().required('Nome é obrigatório'),
        email: yup.string().email('Email inválido').required('Email é obrigatório'),
        celular: yup.string().required('Celular é obrigatório'),
        endereco: yup.string().required('Endereço é obrigatório'),
        rg: yup.string().required('RG é obrigatório'),
        cpf: yup.string().required('CPF é obrigatório'),
        nivelConta: yup.string().required('Nível da conta é obrigatório'),
    })

//Function
  async function checkUser(email){
    const user = await User.findOne({where:{email:email}})
    if(user){
      return true
    }else{
      return false
    }
  }
  
  export const AddUser = async (req, res) => {
      const dados = req.body
      const endereco = `${dados.rua}, ${dados.num}, ${dados.bairro}, ${dados.cep},${dados.cidade}`
    
      dados.nivelConta = 'bronze'
    
      try {
        // Validando os dados
        const resp = await schema.validate({
          nome: dados.nome,
          email: dados.email,
          celular: dados.celular,
          endereco: endereco,
          cpf: dados.cpf,
          rg: dados.rg,
          nivelConta: dados.nivelConta
        }, { abortEarly: false })
        
        const user = await checkUser(dados.email)

        if(user){
          req.flash('error_msg','Usuário já cadastrado!')
          res.redirect('/user/cad')
        }else{
           //Criando o usuário
          await User.create(resp)
          console.log('Usuário criado com sucesso')
          return req.flash('success_msg','Usuário criado com sucesso'),res.redirect('/user/cad')
        }
      } catch (err) {
        if (err.name === 'ValidationError') {
          console.log('Erros de validação:', err.errors)
          return req.flash('error_msg',err.errors),res.redirect('/user/cad')
        } else {
          console.log('Erro ao criar o usuário:', err)
          return req.flash('error_msg',err),res.redirect('/user/cad')
        }
        
      }
  }