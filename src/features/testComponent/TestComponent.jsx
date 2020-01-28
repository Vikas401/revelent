import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testAction';
//import TestPlaceInput from './TestAreaplaces';
import { openModal } from '../modals/modalActions';


 class TestComponent extends Component {
    render() {
        const { data, incrementCounter, decrementCounter, openModal } = this.props;
        return (
            <div>
                <h1>TestComponent</h1>
                <h3>the answer is : {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>
                <Button onClick={() => openModal('TestModal' , {data: 42})} color="teal" content='OpenModal'/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter,
    openModal
}
export default connect(mapStateToProps, actions)(TestComponent);