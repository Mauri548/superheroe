import React from 'react'

const Modal = ({openmodal, mensaje}) => {

    const closeModal = () => {
        openmodal()
    }

    return(
        <div className="modal-personal">
            <div className="modal-personal-body px-5">
                <h4 className="mt-5">{mensaje}</h4>
                <button onClick={closeModal} className="btn btn-danger mb-4 px-5">Cerrar</button>
            </div>
        </div>
        
    )
}

export default Modal