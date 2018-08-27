/**
 * Created by 11408 on 2017/12/28.
 */
import {observer,inject} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { observe,observable, computed, action } from "mobx";
@inject('store')
@observer
class Test extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let {page} = this.props.store
        return (
            <div className="container">
                <div>
                    {page}
                </div>
            </div>

        )
    }
    componentDidMount(){
        console.log(this.props)
    }
}
export default Test