import axios from "axios"
import { useEffect, useState } from "react"

var useAuth = function () {

    var [ state, setState ] = useState({
        isAuth: false,
        isLoading: true
    })

    useEffect( () => {
        var token = localStorage.getItem('token')

        axios.get('http://localhost:5000/user/isAuth', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
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
