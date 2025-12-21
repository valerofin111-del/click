// import { motion } from "motion/react"
import { Flex } from "@radix-ui/themes"
// import styles from '../../../styles/mainCard.module.scss'
import PickText from "../../library/PickText/PickText"
import themeAtom from "../../../atoms/themeAtom"
import { useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"
import Error from "../../fallback/Error"
import Loading from "../../fallback/Loading"
import axios from "axios"

var posFriendsFetch = async () => {
    try {
        var response = await axios.get('http://localhost:5000/friends?search=val')
        return response.data
    } catch (e) {
        console.error(e)
        throw e
    }
}

var SearchFriends = () => {

    var { data, isError, isLoading } = useQuery({
        queryKey: ['posibleFriends'],
        queryFn: posFriendsFetch
    })

    var theme = useAtomValue(themeAtom)

    if (isError) return <Error />
    if (isLoading) return <Loading />
    
    return (
        <>
            <Flex justify={'center'} >
                <PickText className={theme} >Possible friends</PickText>
            </Flex>
                
            <Flex direction={'column'} >
            {
                data.map(friend => (
                    <p key={friend.name} >{friend.name} </p>
                ))
            }
            </Flex>
        </>
    )
}

export default SearchFriends
