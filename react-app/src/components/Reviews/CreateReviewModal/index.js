import React, { useState } from "react"
import { Modal } from "../../../context/Modal"
import CreateReview from "./CreateReview"

import "./CreateReview.css"

const CreateReviewModal = ({productId}) => {
  console.log("CREATE REVIEW MODAL COMPONENT STARTS for product:", productId)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
      className="create-review-button"
      onClick={() => setShowModal(true)}>
        Review This Product
      </button>


      {showModal && (
        <Modal onClose={() => setShowModal(false)}>

          <CreateReview
          onCreation={() => setShowModal(false)}
          productId={productId}
          setShowModal={setShowModal}
          />

        </Modal>
      )}

    </>
  )
}

export default CreateReviewModal
