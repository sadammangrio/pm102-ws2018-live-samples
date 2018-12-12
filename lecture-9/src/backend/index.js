import Koa from 'koa'
import koaJwt from 'koa-jwt'
import Router from 'koa-router'
import bodyParser from 'koa-body'
import jwt from 'jsonwebtoken'
import mg from 'mongoose'
import {DB_URL} from "./defaults"
import {authenticate} from './User'

const SECRET = 'very secret'

async function main() {
    await mg.connect(DB_URL)

    const backend = new Koa()
    const router = new Router({prefix: '/api'})

    router.post('/token', async ctx => {
        const {email, password} = ctx.request.body
        if (await authenticate(email, password)) {
            const token = jwt.sign({email}, SECRET)
            ctx.body = {token}
        } else {
            ctx.status = 401
        }
    })

    router.get('/notes', ctx => {
        ctx.body = {list: []}
    })

    backend.use(bodyParser())
    backend.use(router.allowedMethods())
    backend.use(koaJwt({secret: SECRET}).unless({path: ['/api/token']}))
    backend.use(router.routes())
    backend.listen(3000)
}

main()