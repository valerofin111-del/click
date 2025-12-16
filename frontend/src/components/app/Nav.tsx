import { Flex } from '@radix-ui/themes'
import * as Select from '@radix-ui/react-select'
import { useNavigate } from 'react-router-dom'
import styles from '../../styles/app.module.scss'

var Nav = (
    ({className} : string) => {

        var nav = useNavigate()

        return (
            <>
                <Flex justify={'center'}>
                    <Select.Root onValueChange={(value) => {
                        nav(`${value}`)
                    }}>
                        <Select.Trigger>
                            Nav
                        </Select.Trigger>
                        <Select.Portal>
                            <Select.Content className={styles[className]} position='popper'>
                                <Select.Viewport>
                                    <Select.Group>
                                        <Select.Item value='chats'>Chat</Select.Item>
                                        <Select.Item value='friends'>Friends</Select.Item>
                                        <Select.Item value='options'>Options</Select.Item>
                                    </Select.Group>
                                </Select.Viewport>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root>
                </Flex>
            </>
        )
    }
) 

export default Nav
