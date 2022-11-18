import React, { useState } from "react"
import { Modal } from "../../../context/Modal"
import EditReview from "./EditReview"

import "./EditReview.css"

const EditReviewModal = ({productId}) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
      className="edit-review-button"
      onClick={() => setShowModal(true)}>
        Edit Review
      </button>


      {showModal && (
        <Modal onClose={() => setShowModal(false)}>

          <EditReview
          onCreation={() => setShowModal(false)}
          productId={productId}
          setShowModal={setShowModal}
          />

        </Modal>
      )}

    </>
  )
}

export default EditReviewModal
