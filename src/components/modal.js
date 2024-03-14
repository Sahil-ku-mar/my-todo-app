import React, { useState } from "react";
const Modal = ({ closeModal, onButtonClick }) => {
  const [titleValue, setTitleValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
    console.log("title:", titleValue);
    console.log("date:", dateValue);
    console.log("description:", descriptionValue);

    if (typeof onButtonClick === "function") {
      onButtonClick({
        title: titleValue,
        date: dateValue,
        description: descriptionValue,
      });
    }

    // Close the modal
    closeModal();
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal()}>
              &times;
            </span>
            <h2>
              Title
              <input
                type="text"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
              />
            </h2>
            <p>
              Date
              <input
                type="text"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
            </p>
            <p>
              Description8
              <input
                type="text"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
            </p>
            <button onClick={handleButtonClick}>Button</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
