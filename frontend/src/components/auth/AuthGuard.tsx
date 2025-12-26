import type { FC } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../fallback/Loading/Loading";

var AuthGuard : FC = () => {

    var { isAuth, isLoading } = useAuth()

    if (isLoading) {
        return <Loading />
    }

    if (!isAuth) {
        return (
            <Navigate to='/log' replace />
        )
    } else {
        return (
            <>
                <Outlet />
            </>
        )
    }
} 

export default AuthGuard
