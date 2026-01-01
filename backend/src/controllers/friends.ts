import { FastifyRequest, FastifyReply } from "fastify"

export var _friendsFind = async (req : FastifyRequest, reply : FastifyReply) => {
    try {
        var { db } = req.server
        var { search, page, limit } : any = req.query

        var skipPages = (page - 1) * limit

        var friends = await db.user.findMany({
            where: {
                name: { startsWith: search }
            },
            take: limit,
            skip: skipPages
        })
        

        reply.code(201).send(friends)
    } catch (e : any) {
        reply.code(500).send({ error: e.message })
    }
}

export var _friendsMake = async ( req : FastifyRequest, reply : FastifyReply ) => {
    try {
        var { db } = req.server
        var { name, friend_name } : any = req.body

        if (name === friend_name) {
            throw new Error("You can't be friends yourself")
        }

        var [ name1, name2 ] = [ name, friend_name ].sort()

        var makeFriends = await db.$transaction( async (dbt) => {
            var friendship = await dbt.friendship.create({ data: {
                user1_name: name1,
                user2_name: name2
            } })

            var chat = await dbt.chat.create({ data: {
                friendship_Id: friendship.id
            } })

            return {
                friendship: {
                    id: friendship.id,
                    user1_name: name1,
                    user2_name: name2,
                    chat_Id: chat.id 
                }
            }
        })        

        reply.code(201).send(makeFriends)
    } catch (e : any) {
        reply.code(500).send({ error: e.message })
    }
}
