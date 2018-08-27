/**
 * Created by 11408 on 2017/12/21.
 */
import 'whatwg-fetch'
import Icon from '../../images/bookinfo_icon1.png'
import {observer,inject,useStaticRendering} from 'mobx-react';
import { observe,observable, computed, action } from "mobx";
import DevTools from 'mobx-react-devtools';
import './index.scss'
@inject('store')
@observer
class Index extends React.Component {
    @observable count =1
    @computed
    get total() {
        return this.count * 2;
    }

    render() {
        let {increment,remove} = this.props.store
        return (
            <div className="container">
                <img src={Icon} alt=""/>
                <div className="leave" onClick={()=>this.goRoute()}>goTest</div>
                <div>{this.props.store.page}</div>
                <button onClick={()=>this.add(increment)}>add</button>
                <button onClick={()=>this.clear(remove)}>remove</button>
            </div>
        )
    }
    goRoute(){
        this.props.history.push('/test')
    }
    add(increment){
        increment()
    }
    clear(remove){
        remove()
    }
}
export default Index
