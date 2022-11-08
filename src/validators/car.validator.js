import Joi from "joi";

const carValidator = Joi.object({
    // model: Joi.string().min(2).max(20).required().messages({
    //     'string.empty': 'Model не може бути пустим',
    //     'string.min': 'Model не може бути коротшим за 2 символи',
    //     'string.max': 'Model не може бути довшим за 20 символів',
    //     'string.required': 'Model є обов\'язковим'
    // }),
    model: Joi.string().regex(/^[a-zA-ZА-я]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви, мінімум 1, максимум 20'
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        'number.empty': 'Price не може бути пустим',
        'number.min': 'Price не може бути меншим за 1',
        'number.max': 'Price не може бути більшим за 1000000'
    }),
    year: Joi.number().min(1990).max(2022).required().messages({
        'number.empty': 'Year не може бути пустим',
        'number.min': 'Year не може бути меншим за 1990',
        'number.max': 'Year не може бути більшим за 2022'
    })
})

export {carValidator};