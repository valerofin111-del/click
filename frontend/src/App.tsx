import { RouterProvider, type RouteObject, createBrowserRouter } from "react-router-dom";
import __root from "./components/__root";
import Welcome from "./components/Welcome";
import LogPage from "./components/auth/LogPage";
import RegPage from "./components/auth/RegPage";
import MainPage from "./components/app/MainPage";
import Chat from "./components/app/Chat";
import FindFriends from "./components/app/FindFriends";

var App = function () {
    
    var routerCfg = [
        {
            path: '/',
            element: <__root/>,
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
                    element: <MainPage />,
                    children: [
                        {
                            path: 'chat',
                            element: <Chat />
                        },
                        {
                            path: 'find',
                            element: <FindFriends />
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
