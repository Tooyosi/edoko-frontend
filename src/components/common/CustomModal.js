import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const CustomModal = (props) => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} className={`modal-dialog-centered ${props.classProp}`} {...props}>
      {props.header && <ModalHeader className="d-block pb-0 px-4">
        <div >
          <div className="float-left">
            {props.header}

          </div>
          <div className="float-right">
            <button type="button" className="close" onClick={props.toggle} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

          </div>
        </div>
      </ModalHeader>}
      <ModalBody>
        <button type="button" className={`${props.hideDismiss? 'd-none': null} close`} onClick={props.toggle} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="clearfix" />
        {props.children}
      </ModalBody>
    </Modal>
  );
};

CustomModal.propTypes = {
  // modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

CustomModal.defaultpropTypes = {
  isOpen: false,
  modal: "false",
};

export default CustomModal;