import {addUser} from './User'
import mongoose from 'mongoose'
import {DB_URL} from "./defaults"

async function main() {
    await mongoose.connect(DB_URL)

    const args = process.argv.slice(2)
    if (args < 2) {
        console.log('USAGE: <email> <password>')
        process.exit(1)
    }
    const [email, password] = args
    const id = await addUser(email, password)
    console.log(`id: ${id}`)
}
main()
