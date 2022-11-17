import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import SignUpForm from './SignUpForm.js';
import './SignupForm.css';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className="profile-btm-div"><button>Register</button></div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
