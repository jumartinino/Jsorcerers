const { body } = require("express-validator");

const validationUser = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('profile_pic')
                    .exists().withMessage("Não há foto carregada"),

                body('name')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isLength({min: 3}).withMessage('O campo deve ter, no mínimo, 3 caracteres'),

                body('email')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isEmail().withMessage('A entrada deve ser um e-mail como usuario@exemplo.com'),

                body('password')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isLength({min: 6}).withMessage("A senha deve ter, no mínimo, 6 caracteres"),

                body('endereco')
                    .exists().withMessage("O campo não pode estar vazio"),

                body('data_nasc')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isDate().withMessage('Data precisa estar no formato: AAAA/MM/DD'),

                body('is_mod')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isBoolean.withMessage("O campo só aceita 'true' ou 'false' ")
                
            ]
        }
    }
}

const validationUser_Shop = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('profile_pic')
                    .exists().withMessage("Não há foto carregada"),

                body('name')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isLength({min: 3}).withMessage('O campo deve ter, no mínimo, 3 caracteres')
                
            ]
        }
    }
}

const validationQuestion = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('question')
                    .exists().withMessage("O campo não pode estar vazio")
                
            ]
        }
    }
}

const validationProduct = (method) =>{
    switch(method){
        case 'create': {
            return [
                body('photo')
                    .exists().withMessage("Não há foto carregada"),

                body('name')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isLength({min: 3}).withMessage('O campo deve ter, no mínimo, 3 caracteres'),

                body('price')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isNumeric().withMessage('O valor não é numérico'),

                body('description')
                    .exists().withMessage("O campo não pode estar vazio")
                
            ]
        }
    }
}

const validationPost = (method) =>{
    switch(method){
        case 'create': {
            return [

                body('avg_rating')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isFloat().withMessage('O valor não é um número decimal'),

                body('avaliable_qtt')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isNumeric.withMessage("O valor não é numérico")
                
            ]
        }
    }
}

const validationComment = (method) =>{
    switch(method){
        case 'create': {
            return [

                body('content')
                    .exists().withMessage("O campo não pode estar vazio")
                
            ]
        }
    }
}

const validationCart = (method) =>{
    switch(method){
        case 'create': {
            return [


                body('item_qtt')
                    .exists().withMessage("O campo não pode estar vazio")
                    .isNumeric.withMessage("O valor não é numérico")
                
            ]
        }
    }
}

const validationBuying = (method) =>{
    switch(method){
        case 'create': {
            return [

                body('tracking_code')
                    .exists().withMessage("O campo não pode estar vazio")
                
            ]
        }
    }
}

module.exports = {
    validationUser,
    validationUser_Shop,
    validationQuestion,
    validationProduct,
    validationPost,
    validationComment,
    validationCart,
    validationBuying
}
