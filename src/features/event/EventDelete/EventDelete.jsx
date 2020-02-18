import React from 'react'
import Modal from '../../Modal';
import { Link } from 'react-router-dom';
import { fetchOneEvent, deleteEvent } from '../eventActions';
import { connect } from 'react-redux';

 class EventDelete extends React.Component{

    componentDidMount(){
        this.props.fetchOneEvent(this.props.match.params.id)
    }
     
   renderActions(){
       const {id} = this.props.match.params;
     return(
    <React.Fragment>
    <Link to='/events' onClick={() => this.props.deleteEvent(id)} className='ui negative button'>DELETE</Link>
    <Link to='/events' className='ui button'>Cancle</Link>
  </React.Fragment>
   )}
   renderContent(){
    if(!this.props.event){
      //  console.log(this.props.events)
        return 'Are you sure you want to delete this event'
    }
    return `Are you sure you want to delete this event with title ${this.props.event.title}`
}

   render(){
    return (
       
        <Modal 
        title= 'Delete Budget'
        content={this.renderContent()}
        actions = {this.renderActions()}
        //onDismiss={() => history.push('/')}
        /> 
    )
}}
const mapStateToProps = (state, ownProps) => ({
    event: state.event[ownProps.match.params.id]
})
const actions={
    deleteEvent,
    fetchOneEvent
}

export default connect(mapStateToProps, actions)(EventDelete);