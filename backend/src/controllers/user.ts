import bcrypt from "bcryptjs"
import { FastifyRequest, FastifyReply } from "fastify"

interface userData {
    name: string,
    key: string
}

export var _userReg = async ( req : FastifyRequest, reply : FastifyReply ) => {
    try {
        var { db } = req.server
        var { name, key } = req.body as userData

        var hashedKey = await bcrypt.hash(key, 10)

        var user = await db.user.create({ data: { name, key: hashedKey } })
        reply.code(201).send(user.name)
    } catch (e : any) {
        reply.code(500).send({ error: e.message})
    }
}

export var _userLog = async ( req: FastifyRequest, reply: FastifyReply ) => {
    try {
        var { db } = req.server        
        var { name, key } : any = req.body

        var user = await db.user.findUnique({
            where: { name: name }
        })

        if (!user) {
            return reply.code(401).send({
                error: 'User not found'
            })
        }

        var isUserKey = await bcrypt.compare(key, user.key)

        if (!isUserKey) {
            return reply.code(401).send({
                error: 'Password is not correct'
            })
        }

        var payload = {
            name: user.name,
        }

        var token = req.server.jwt.sign(payload)

        reply.send({ token, name: user.name })

    } catch (e : any) {
        reply.code(500).send({ error: e.message })
    }
}
