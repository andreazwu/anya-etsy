import React, { useState } from "react"
import { Modal } from "../../../context/Modal"
import CreateReview from "./CreateReview"

import "./CreateReview.css"

const CreateReviewModal = ({productId}) => {
  console.log("CREATE REVIEW MODAL COMPONENT STARTS for product:", productId)
  const [showModal, setShowModal] = useState(false)
  console.log("before onClick showModal:", showModal)

  return (
    <>
      <button
      className="create-review-button"
      onClick={() => setShowModal(true)}>
        {console.log("after onClick showModal:", showModal)}
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
