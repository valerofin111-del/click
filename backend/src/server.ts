import Fastify, { type FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

interface Server {
    port: number,
    host: string
}

var buildServer = async function (cfg: Server): Promise<FastifyInstance> {
    var fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true,
        methods: [ 'GET', 'POST', 'DELETE', 'PUT' ],
        credentials: true
    })

    await fastify.register(swagger, {})
    await fastify.register(swaggerUi, {
        routePrefix: '/docs'
    })

    return fastify
}

var start = async function () {
    try {
        var cfg: Server = {
            port: 5000,
            host: 'localhost'
        }

       var server = await buildServer(cfg)
       await server.listen({ port: cfg.port, host: cfg.host })
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()
