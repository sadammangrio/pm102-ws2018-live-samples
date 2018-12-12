import mg from 'mongoose'
import 'mongoose-type-email'
import bcrypt from 'bcrypt'

const schema = new mg.Schema({
    email: {
        type: mg.Types.Email,
        required: true,
        index: {unique: true},
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mg.model('users', schema)

export async function addUser(email, plainPassword) {
    const password = await bcrypt.hash(plainPassword, 10)
    const {_doc: {_id}} = await User.create({email, password})
    return _id
}

export async function authenticate(email, plainPassword) {
    const {_doc} = await User.findOne({email})
    console.log(_doc)
    if (!await bcrypt.compare(plainPassword, _doc.password)) {
        return null
    }
    return _doc._id
}
