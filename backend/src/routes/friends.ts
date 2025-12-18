import { FastifyInstance } from "fastify"
import { _friendsFind, _friendsMake } from "../controllers/friends.js"

var friendsFindData = {
    name: { type: 'string' },
    cycles: { type: 'integer' }
}

var friendsFind = {
    schema: {
        querystring: {
            type: 'object',
            properties: {
                search: { type: 'string', minLength: 2 },
                page: { type: 'integer', minimum: 1, default: 1 },
                limit: { type: 'integer', minimum: 1, maximum: 20, default: 20 }
            },
            required: [ 'search' ],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    users: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: friendsFindData
                        }
                    },
                    nextPage: {
                        type: [ 'integer', 'null' ]
                    }
                }
            }
        }
    },
    handler: _friendsFind
}

var makeFriendData = { 
    name: { type: 'string' }, 
    friend_name: { type: 'string' }
}


var friendsMake = {
    schema: {
        body: {
            type: 'object',
            required: [ 'name', 'friend_name' ],
            properties: makeFriendData,
            additionalProperties: false
        }
    },
    handler: _friendsMake
}

var friendsRoutes = function ( fastify, options, done ) {

    fastify.get('/friends', friendsFind)

    fastify.post('/friends/make', friendsMake)

    done() 
}

export default friendsRoutes
