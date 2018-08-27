export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render () {
        return (
            <div>
                <div>{
                    this.props.children
                }</div>
            </div>
        )
    }
}
