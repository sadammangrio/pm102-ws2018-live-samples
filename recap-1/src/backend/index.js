import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-body'
import uuid from 'uuid/v4'

const notes = [{
    id: 'df18bc2b-bdb8-404e-9d5e-656ccf4e6f15',
    title: 'hello',
    body: 'there'
}]

const backend = new Koa()
const router = new Router({prefix: '/api'})
backend.use(bodyParser())
backend.use(router.routes())

router.get('/notes', ctx => {
    ctx.body = {notes}
})

router.post('/note', ctx => {
    const {body} = ctx.request
    const newNote = {
        ...body,
        id: uuid(),
    }
    notes.push(newNote)
    ctx.body = newNote
})

router.get('/note/:noteId', ctx => {
    const {noteId} = ctx.params
    const note = notes.find(({id}) => id === noteId)
    if (!note) {
        ctx.status = 404
        return
    }
    ctx.body = note
})



backend.listen(3000)
console.log('listening on 3000')