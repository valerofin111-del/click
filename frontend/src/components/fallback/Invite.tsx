import type { FC } from 'react'
import styles from './Fallback.module.scss'
import inviteIMG from '../../images/invite.png'

var Invite : FC = () => {
 
    return (
        <>
            <div className={styles.Fallback} >
                <img src={inviteIMG} alt='invite' ></img>
            </div>             
        </>
    )
}

export default Invite
