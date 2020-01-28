import { createReducer } from "../../app/common/utills/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstant";

const initialState = null;

const openModal = (state, payload) => {
    const { modalType, modalProps } = payload;

    return {modalType, modalProps}
}

const closeModal = () => {
    return null
}
export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})