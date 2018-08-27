import React from "react"
import {Provider} from 'mobx-react'
import {Router,Redirect,Switch,Route,withRouter,HashRouter} from 'react-router-dom'
import Loadable from "react-loadable";
import store from './../store/mobx'
import App from "../containers/App.js"
const Loading = () => {
    return (
        <div>
            loading
        </div>
    )
}
const NotFound = Loadable({
    loader: () => import("../containers/404"),
    loading: Loading
})
const Index = Loadable({
    loader: () => import("../containers/Index/components"),
    loading: Loading
})
const Test = Loadable({
    loader: () => import("../containers/Test"),
    loading: Loading
})
const onEnter = (Component,props) => {
    return <Component {...props}/>
}
const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/test' render={props =>onEnter(Test,props)}/>
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404' />
        </Switch>
    </HashRouter>
)
const Route_Store = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>

)

export default Route_Store

