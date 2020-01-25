import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testAction';



 class TestComponent extends Component {
    render() {
        const { data, incrementCounter, decrementCounter } = this.props;
        return (
            <div>
                <h1>TestComponent</h1>
                <h3>the answer is : {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'/>
                <Button onClick={decrementCounter} negative content='Decrement'/>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter
}
export default connect(mapStateToProps, actions)(TestComponent);