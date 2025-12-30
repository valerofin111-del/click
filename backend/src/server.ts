// Framework -->
import Fastify, { type FastifyInstance } from 'fastify'
import cors from '@fastify/cors'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import jwt from '@fastify/jwt'
// <-- Framework

import 'dotenv/config'

// --> Routes
import userRoutes from './routes/user.js'
import friendsRoutes from './routes/friends.js'
// <-- Routes

// Prisma -->
import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

declare module 'fastify' {
    interface FastifyInstance {
        db: PrismaClient,
        pool: Pool
    }
}

declare module 'fastify' {
    interface FastifyInstance {
        auth: ( req: FastifyRequest, reply: FastifyReply ) => Promise<void>;
        db: PrismaClient;
        pool: Pool;
    }
}

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set')
}

var pool = new Pool({ connectionString: process.env.DATABASE_URL })
var adapter = new PrismaPg(pool)
var db = new PrismaClient({adapter})
// <-- Prisma 

interface Server {
    port: number,
    host: string
}

var buildServer = async function (cfg: Server): Promise<FastifyInstance> {
    var fastify = Fastify({
        logger: {
            level: 'info',
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true
                }
            }
        }
    })

    fastify.decorate('db', db)
    fastify.decorate('pool', pool)

    await fastify.register(cors, {
        origin: true,
        methods: [ 'GET', 'POST', 'DELETE', 'PUT' ],
        credentials: true
    })

    await fastify.register(swagger, {})
    await fastify.register(swaggerUi, {
        routePrefix: '/docs'
    })

    await fastify.register(jwt, {
        secret: process.env.SECRET_JWT
    })
   
    fastify.decorate('auth', async ( req : any, reply : any ) => {
        try {
            await req.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })

    await fastify.register(userRoutes)
    await fastify.register(friendsRoutes)

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

process.on('SIGINT', async () => {
    try {
        await db.$disconnect()
        await pool.end()
        process.exit(0)
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
})

start()
