import React, { useState } from "react"
import { Modal } from "../../../context/Modal"
import CreateReview from "./CreateReview"

import "./CreateReview.css"

const CreateReviewModal = ({productId, showNewReviewModal, setShowNewReviewModal}) => {

  return (
    <div className="create-review-modal-wrap">
      <button
      className="create-review-button"
      // onClick={() => setShowModal(true)}>
      onClick={() => setShowNewReviewModal(true)}>
        Review This Product
      </button>


      {showNewReviewModal && (
        <Modal onClose={() => setShowNewReviewModal(false)}>

          <CreateReview
            onCreation={() => setShowNewReviewModal(false)}
            productId={productId}
            setShowNewReviewModal={setShowNewReviewModal}
          />

        </Modal>
      )}

    </div>
  )
}

export default CreateReviewModal
