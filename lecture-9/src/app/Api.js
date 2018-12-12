import axios from 'axios'

export default class Api {
    constructor(authToken) {
        const headers = authToken ? {'Authorization': `Bearer ${authToken}`} : undefined
        this._req = axios.create({headers})
    }

    async status() {
        try {
            const {data} = await this._req.get('/api/status')
            return data
        } catch (e) {
            return null
        }
    }

    async login(email, password) {
        const {data: {idToken}} = await this._req.put('/api/login')
    }
}