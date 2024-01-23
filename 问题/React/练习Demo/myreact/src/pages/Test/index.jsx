import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Test2 from '../../components/Test2'
import { Route } from 'react-router-dom'
import Test2Home from '../Test2/pages/Test2Home'



export default class index extends Component {
    ipt = React.createRef()
    btn = () => {
        console.log(this.ipt.current.value);
        PubSub.publish('AppText', this.ipt.current.value)
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { btn, ipt } = this
        return (
            <div>
                <input ref={ipt} type="text" />
                <button onClick={btn}>点击传输</button>
                <Test2>Sjasja</Test2>
                <Route path='/test/aa' component={Test2Home} />
            </div>
        )
    }
}
