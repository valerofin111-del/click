import { motion } from "motion/react"
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
import styles from '../../../styles/mainCard.module.scss'
import * as Tooltip from '@radix-ui/react-tooltip'

var friendsFindFetch = async (debouncedSearch : string, page : number) => {
    try {
        var response = await axios.get(`http://localhost:5000/friends/find?search=${encodeURIComponent(debouncedSearch)}&page=${encodeURIComponent(page)}`)
        console.info(`http://localhost:5000/friends/find?search=${encodeURIComponent(debouncedSearch)}page=${encodeURIComponent(page)}`)
        return response.data
    } catch (e) {
        throw e
    }
}

var SearchFriends: FC = () => {

    var timeOfQuery = 500

    var [ search, setSearch ] = useState<string>('')
    var [ debouncedSearch ] = useDebounce(search, timeOfQuery)
    var [ page, setPage ] = useState<number>(1)

    var { data, isLoading, isError } = useQuery({
        queryKey: ['friendsSearch', debouncedSearch, page],
        queryFn: () => friendsFindFetch(debouncedSearch, page),
        enabled: debouncedSearch.length > 0,
        placeholderData: prev => prev
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
            return <h1 className={styles.NotResponse} >Try to find friends</h1>
        } else if (loading || isLoading ) {
            return <Loading />
        } else if (isError) {
            return <Error />
        } else if (!data || data.length === 0) {
            return <h1 className={styles.NotResponse} >No results</h1>
        } else {
            return (
                <>
                    {data && data.map((friend : any) => (
                        <Flex direction={'column'} >
                            <p className={styles.Response} key={friend.name} >{friend.name} </p>
                        </Flex>
                    ))}
                </>
            )}
        }

    return (
        <>
        <Tooltip.Provider>

            <Flex justify={'center'} >
                <PickText className={theme} >Possible friends</PickText>
            </Flex>

            <Flex justify={'center'} 
                style={{ overflowY: 'auto', height: '310px', maxWidth: '100%',
                    border: '2px solid hsl(0, 0%, 5%)', borderRadius: '8px', 
                    boxShadow: '2px 2px 1px 1px hsl(0, 0%, 5%)' }} 
            >

                <Flex justify={'center'} className={styles.ResponseArea} >
                    <Response />
                </Flex>
            
            </Flex>
            
            <Flex justify={'center'} direction={'row'} style={{ marginTop: '20px', maxWidth: '636px' }} >

            <Tooltip.Root delayDuration={0} >
                <Tooltip.Trigger asChild>
                    <motion.button className={styles.PageBtn} initial={{ scale: 0.5 }} animate={{ x: 22, y: -14 }} 
                        whileTap={{scale: 0.6}} onClick={() => setPage(prev => {
                            if (prev < 2) {
                                return prev
                            } else {
                                return prev - 1
                            }
                        })} 
                    >
                        <motion.div whileTap={{ x: -34 }} >{'<'}</motion.div> 
                    </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Content asChild>
                    <span className={styles.PageNum} >
                        Page: {page}
                    </span>
                </Tooltip.Content>
            </Tooltip.Root>

                <motion.input placeholder="username..." style={{ width: '390px' }} onChange={(e) => {
                    setSearch(e.target.value)
                }} value={search} ></motion.input>

                <Tooltip.Root delayDuration={0} >
                    <Tooltip.Trigger asChild>
                        <motion.button className={styles.PageBtn} initial={{ scale: 0.5 }} animate={{ x: -22, y: -14 }} 
                            whileTap={{scale: 0.6}} onClick={() => setPage(prev => prev + 1)} 
                        >
                            <motion.div whileTap={{ x: 34 }} >{'>'}</motion.div> 
                        </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Content asChild>
                    <span className={styles.PageNum} >
                        Page: {page}
                    </span>
                </Tooltip.Content>
                </Tooltip.Root>
            </Flex>

            </Tooltip.Provider>
        </>
    )
}

export default SearchFriends
