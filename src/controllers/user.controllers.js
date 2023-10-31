const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
    return res.json(users)
});

//create users 
const create = catchError(async(req, res) =>{
    const {first_name, last_name, email, password, birthday } = req.body;
    const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday,
    });
    return res.status(201).json(user);
});

//atraer el userio por id
const getOne_2 = catchError(async(req, res) =>{
    const { id }  = req.params;
    const user = await User.findOne({where:{id}});
    return  res.json(user)
})

//delete for id
const remove = catchError(async(req, res) => {
    const { id }  = req.params;
    await User.destroy({where: {id}})
    return res.sendStatus(204)
})

const update = catchError(async(req, res) => {
    const { id }  = req.params;
    const {first_name, last_name, email, password, birthday } = req.body;
    const user = await User.update(
    {   first_name,
        last_name,
        email,
        password,
        birthday},

        {where: {id}, returning:true}
        
    )
    return res.json(user[1][0])
})


module.exports = {
    getAll,
    create,
    getOne_2,
    remove,
    update,
}