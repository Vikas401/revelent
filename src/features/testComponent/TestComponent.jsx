import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementAsync, decrementAsync } from './testAction';
//import TestPlaceInput from './TestAreaplaces';
import { openModal } from '../modals/modalActions';


 class TestComponent extends Component {
    render() {
        const { data, incrementAsync, decrementAsync, openModal, loading, buttonName } = this.props;
        return (
            <div>
                <h1>TestComponent</h1>
                <h3>the answer is : {data}</h3>
                <Button   
                name='increment' 
                loading={buttonName === 'increment' && loading} 
                onClick={(e) => incrementAsync(e.target.value)}  
                positive content='Increment'/>
                <Button 
                name='decrement' 
                loading={buttonName === 'decrement' && loading} 
                onClick={(e) => decrementAsync(e.target.value)} 
                negative content='Decrement'/>
                <Button onClick={() => openModal('TestModal' , {data: 42})} color="teal" content='OpenModal'/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    data: state.test.data,
    loading: state.async.loading,
    buttonName: state.async.elementName
})

const actions = {
    incrementAsync,
    decrementAsync,
    openModal
}
export default connect(mapStateToProps, actions)(TestComponent);