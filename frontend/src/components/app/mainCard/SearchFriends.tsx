import { motion, time } from "motion/react"
import { Flex } from "@radix-ui/themes"
import PickText from "../../library/PickText/PickText"
import colorThemeAtom from "../../../atoms/colorThemeAtom"
import { useAtomValue } from "jotai"
import { useQuery } from "@tanstack/react-query"
import Error from "../../fallback/Error/Error"
import Loading from "../../fallback/Loading/Loading"
import axios from "axios"
import { useEffect, useState, type FC } from "react"
import { useDebounce } from 'use-debounce'

var friendsFindFetch = async (debouncedSearch: string) => {
    try {
        var response = await axios.get(`http://localhost:5000/friends/find?search=${encodeURIComponent(debouncedSearch)}`)
        return response.data
    } catch (e) {
        console.error(e)
        throw e
    }
}

var SearchFriends: FC = () => {

    var timeOfQuery = 500

    var [ search, setSearch ] = useState<string>('')
    var [ debouncedSearch ] = useDebounce(search, timeOfQuery)

    var { data, isLoading, isError } = useQuery({
        queryKey: ['friendsSearch', debouncedSearch],
        queryFn: () => friendsFindFetch(debouncedSearch),
        enabled: debouncedSearch.length > 0
    })

    var theme = useAtomValue(colorThemeAtom)

    var [ loading, setLoading ] = useState<boolean>(false)

    useEffect(() => {
        if (search.length > 0) {
            setLoading(true)

            var loadingTimeout = setTimeout(() => {
                setLoading(false)
            }, timeOfQuery)
            return () => clearTimeout(loadingTimeout)
        } else {
            setLoading(false)
        }
    }, [search])

    var Response : FC = () => {
        if (search.length === 0) {
            return <h1>Try to find friends</h1>
        } else if (loading || isLoading ) {
            return <Loading />
        } else if (isError) {
            return <Error />
        } else if (!data || data.length === 0) {
            return <h1>No results</h1>
        } else {
            return (
                <>
                    {data && data.map((friend : any) => (
                        <Flex>
                            <p key={friend.name} >{friend.name} </p>
                        </Flex>
                    ))}
                </>
            )}
        }

    return (
        <>
            <Flex justify={'center'} >
                <PickText className={theme} >Possible friends</PickText>
            </Flex>

            <Flex justify={'center'} direction={'column'} 
                style={{ overflowY: 'auto', height: '310px', border: '2px solid hsl(0, 0%, 5%)', borderRadius: '8px', boxShadow: '2px 2px 1px 1px hsl(0, 0%, 5%)' }} 
            >

            <Flex justify={'center'}>
                <Response />
            </Flex>
            
            </Flex>
            
            <Flex justify={'center'} style={{ marginTop: '20px' }} >
                <motion.input placeholder="username..." style={{ width: '390px' }} onChange={(e) => {
                    setSearch(e.target.value)
                }} value={search} ></motion.input>
            </Flex>
        </>
    )
}

export default SearchFriends
