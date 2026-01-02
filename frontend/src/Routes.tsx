import { RouterProvider, type RouteObject, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense, type FC } from "react";

import Root from "./components/Root";

import Welcome from "./components/Welcome";
import LogPage from "./components/auth/LogPage";
import RegPage from "./components/auth/RegPage";
import AuthGuard from "./components/auth/AuthGuard";

var App = lazy(() => import('./components/app/App'));
import Greetings from "./components/app/mainCard/Greetings";
import Chats from "./components/app/mainCard/Chats";
import SearchFriends from "./components/app/mainCard/SearchFriends";
import Options from "./components/app/mainCard/Options";

import Error from "./components/fallback/Error";
import Loading from "./components/fallback/Loading";

var Routes : FC = function () {
    
    var routerCfg = [
        {
            path: '/',
            element: <Root/>,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Welcome />
                },
                {
                    path: 'log',
                    element: <LogPage />
                },
                {
                    path: 'reg',
                    element: <RegPage />
                },
                {
                    path: 'app',
                    element: <AuthGuard />,
                    children: [
                        {
                            element: <Suspense fallback={<Loading />} ><App /></Suspense>,
                            children: [
                                {
                                    index: true,
                                    element: <Greetings />
                                },
                                {
                                    path: 'chats',
                                    element: <Chats />
                                },
                                {
                                    path: 'friends',
                                    element: <SearchFriends />
                                },
                                {
                                    path: 'options',
                                    element: <Options />
                                }
                            ]
                        }
                    ]
                }
            ] 
        }
    ] as const satisfies RouteObject[]

    var router = createBrowserRouter(routerCfg)

    return (
        <RouterProvider router={router} />
    )
}

export default Routes
