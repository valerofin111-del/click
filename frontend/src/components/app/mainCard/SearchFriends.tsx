import { motion } from "motion/react"
import { Flex } from "@radix-ui/themes"
import PickText from "../../library/PickText/PickText"
import themeAtom from "../../../atoms/themeAtom"
import { useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"
import Error from "../../fallback/Error/Error"
import Loading from "../../fallback/Loading/Loading"
import axios from "axios"
import { useState } from "react"
import { useDebounce } from 'use-debounce'

var friendsFindFetch = async (debouncedSearch: string) => {
    try {
        var response = await axios.get(`http://localhost:5000/friends/find?search=${debouncedSearch}`)
        return response.data
    } catch (e) {
        console.error(e)
        throw e
    }
}

var SearchFriends = () => {

    var [ search, setSearch ] = useState<string>('')
    var [ debouncedSearch ] = useDebounce(search, 500)

    var { data, isError, isLoading } = useQuery({
        queryKey: ['friendsSearch', debouncedSearch],
        queryFn: () => friendsFindFetch(debouncedSearch),
        enabled: debouncedSearch.length > 0
    })

    var theme = useAtomValue(themeAtom)

    return (
        <>
            <Flex justify={'center'} >
                <PickText className={theme} >Possible friends</PickText>
            </Flex>

            <Flex justify={'center'} direction={'column'} 
                style={{ overflowY: 'auto', height: '220px', border: '2px solid hsl(0, 0%, 5%)', borderRadius: '8px', boxShadow: '2px 2px 1px 1px hsl(0, 0%, 5%)' }} 
            >
                {search.length === 0 && (
                    <Flex justify={'center'}>
                        <h1>Try to find friends</h1>
                    </Flex>
                )}

                {isError && (
                    <Flex justify={'center'}>
                        <Error />
                    </Flex>
                )}
                {isLoading && (
                    <Flex justify={'center'}>
                        <Loading />
                    </Flex>
                )}

                {data && data.map(friend => (
                    <p key={friend.name} style={{ marginLeft: '36px' }} >{friend.name} </p>
                ))}
            </Flex>
            
            <Flex justify={'center'} style={{ marginTop: '20px' }} >
                <motion.input style={{ width: '390px' }} onChange={(e) => setSearch(e.target.value)} value={search} ></motion.input>
            </Flex>
        </>
    )
}

export default SearchFriends
