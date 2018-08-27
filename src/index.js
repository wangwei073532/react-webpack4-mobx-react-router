/**
 * Created by 11408 on 2018/7/23.
 */
import 'es6-shim' //这个写在最上面 兼容es6语法 安卓4不支持es6语法
import 'es6-promise'
import React from "react"
import { render } from "react-dom"
import fastclick from 'fastclick'
import rem from './static/rootFont'
import App from "./router/routerMap.js"
import registerServiceWorker from './registerServiceWorker';
import './static/swiper.css'
registerServiceWorker()
rem
fastclick.attach(document.body)
render (
    <App/>,
    document.getElementById("root")
)