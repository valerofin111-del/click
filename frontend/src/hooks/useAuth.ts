import axios from "axios"
import { useEffect, useState } from "react"

var useAuth = function () {

    var [ state, setState ] = useState({
        isAuth: false,
        isLoading: true
    })

    useEffect( () => {
        axios.get('http://localhost:5000/user/isAuth', { withCredentials: true })
            .then(response => setState({
                isAuth: response.data.isAuth,
                isLoading: false
            }))
            .catch( () => setState({
                isAuth: false,
                isLoading: false
            }))
    }, [])

    return state
}

export default useAuth
