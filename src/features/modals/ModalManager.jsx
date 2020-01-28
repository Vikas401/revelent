import React from 'react'
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { connect } from 'react-redux';

const modalLookup = {
    TestModal,
    LoginModal,
    RegisterModal
}

const mapStateToProps = (state) => ({
 currentModal: state.modals
})

 const ModalManager = ({currentModal}) => {
    let renderModal;

    if(currentModal){
        const { modalType, modalProps } = currentModal;
        const ModalComponent = modalLookup[modalType];

        renderModal = <ModalComponent {...modalProps}/>
    }
  
    return (
         <span>{renderModal}</span>
    )
}
export default connect(mapStateToProps)(ModalManager);
