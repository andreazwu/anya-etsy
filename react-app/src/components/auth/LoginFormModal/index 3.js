import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import LoginForm from './LoginForm.js';
import './LoginForm.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="profile-btm-div">Sign In</div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
