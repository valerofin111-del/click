import { FastifyRequest, FastifyReply } from "fastify"

interface userData {
    name: string,
    key: string
}

export var _userReg = async ( req : FastifyRequest, reply : FastifyReply ) => {
    try {
        var { db } = req.server
        var { name, key } = req.body as userData

        var user = await db.user.create({ data: { name, key } })
        reply.code(201).send(user)
    } catch (e : any) {
        reply.code(500).send({ error: e.message})
    }
}

// export var _userLog = async ( req: FastifyRequest, reply: FastifyReply ) => {
//     try {


//     } catch (e) {
//         reply.code(500).send({ error: e.message })
//     }
// }
