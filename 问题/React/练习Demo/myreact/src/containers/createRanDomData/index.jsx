import React, { Component } from 'react'
import { connect } from 'react-redux'

class createRanDomData extends Component {

    render() {
        const { countReducer } = this.props
        return (
            <div>
                <p>创建随机数据</p>
                <div>{countReducer}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ countReducer: state.countReducer })


const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(createRanDomData)