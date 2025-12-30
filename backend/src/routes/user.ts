import { FastifyInstance } from 'fastify'
import { _userReg, _userLog } from '../controllers/user.js'


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

var userLog = {
    schema: {
        body: {
            type: 'object',
            required: ['name', 'key'],
            properties: userData,
            additionalProperties: false
        }
    },
    handler: _userLog
}

var userRoutes = function ( fastify : FastifyInstance, options : any, done : any ) {

    fastify.post('/user/create', userReg)

    fastify.post('/user/log', userLog)

    fastify.get('/user/isAuth', { onRequest: [fastify.auth], handler: async ( req, reply ) => {
        reply.send({
            isAuth: true,
            user: req.user
        })
    } })

    done()
}

export default userRoutes
