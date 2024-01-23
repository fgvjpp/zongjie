import Home from "../pages/Home"

import { Navigate } from "react-router-dom"
import { lazy } from "react"
// Navigate组件用于重定向

// 路由懒加载方式
// 路由懒加载组件需要放在Suspense组件内
const Content = lazy(() => import('../pages/Home/Content'))
const About = lazy(() => import("../pages/About"))
const UserReducer = lazy(() => import("../pages/UseReducer/UseReducer.jsx"))
const CommentParameters = lazy(() => import("../pages/组件传值/index.jsx"))
const CssInjs = lazy(() => import("@/pages/cssInJs样式组件/index"))
const SvgIcon = lazy(() => import("@/pages/svg组件/index"))
const ImgLoad = lazy(() => import("@/pages/图片懒加载/index"))

const routerOptions = [
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'content/:id',
                element: <Content />
            },
            {
                path: 'content',
                element: <Content />
            }
        ]
    },
    {
        path: '/about',
        element: <About />,
        children: [
            {
                path: 'UserReducer',
                element: <UserReducer />
            }
        ]
    },
    {
        path: '/commentsParameters',
        element: <CommentParameters />
    },
    {
        path: '/cssinjs',
        element: <CssInjs />
    },
    {
        path: '/svgicon',
        element: <SvgIcon />
    },
    {
        path: '/imgLoad',
        element: <ImgLoad />
    },
    {
        path: '/',
        element: <Navigate to="/home" />,
    },
]

export default routerOptions