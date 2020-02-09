import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ContactModal = (props) => {
  const { data, closeModal } = props;
  const {
    modalIsOpen, name, email, phone, topic, message,
  } = data;

  return (
    <Modal isOpen={modalIsOpen}>
      <div className="modal_closeArea">
        <button type="submit" onClick={closeModal}>
          <div className="closeIcon" />
        </button>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 modal_section">
            <h1>已成功送出表單！</h1>
          </div>
          <div className="col-12 col-md-6 modal_section">
            <h1>名字</h1>
            <p>{name}</p>
          </div>
          <div className="col-12 col-md-6 modal_section">
            <h1>信箱</h1>
            <p>{email}</p>
          </div>
          <div className="col-12 col-md-6 modal_section">
            <h1>電話</h1>
            <p>{phone}</p>
          </div>
          <div className="col-12 col-md-6 modal_section">
            <h1>主題</h1>
            <p>{topic}</p>
          </div>
          <div className="col-12 modal_section">
            <h1>訊息</h1>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ContactModal;
