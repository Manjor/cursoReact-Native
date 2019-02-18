const bcrypt = require('bcrypt-nodejs')

module.exports = app =>{
    const obterHash = (password, callback) =>{
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(password,salt,null,(err,hash)=> callback(hash))
        })
    }

    const save = (req,res) =>{
        obterHash(req.body.password,hash =>{
            const password = hash
            const user = {...req.body}

            app.db('users')
                .insert({name: user.name, email: user.email, password})
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }


    return { save }
}