import { RouterProvider, type RouteObject, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import __root from "./components/__root";
import Welcome from "./components/Welcome";
import LogPage from "./components/auth/LogPage";
import RegPage from "./components/auth/RegPage";

var MainPage = lazy(() => import('./components/app/MainPage'));
import Chats from "./components/app/Chats";
import SearchFriends from "./components/app/SearchFriends";
import Options from "./components/app/Options";

import Error from "./components/fallback/Error";
import Loading from "./components/fallback/Loading";

var App = function () {
    
    var routerCfg = [
        {
            path: '/',
            element: <__root/>,
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
                    element: <Suspense fallback={Loading} ><MainPage /></Suspense>,
                    children: [
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
    ] as const satisfies RouteObject

    var router = createBrowserRouter(routerCfg)

    return (
        <RouterProvider router={router} />
    )
}

export default App
