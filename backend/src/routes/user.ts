import { FastifyInstance } from 'fastify'
import { _userReg } from '../controllers/user.js'


var userData = {
    name: { type: 'string', minLength: 3, maxLength: 20 },
    key: { type: 'string', minLength: 3, maxLength: 20 }
}

var userReg = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'key'],
            properties: userData,
            additionalProperties: false
        }
    },
    handler: _userReg
}

var userRoutes = function ( fastify : FastifyInstance, options, done ) {

    fastify.post('/user/create', userReg)

    done()
}

export default userRoutes
