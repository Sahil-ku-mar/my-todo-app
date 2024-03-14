// ParentComponent.js
import React from "react";
import Modal from "./ParentComponent.js";

const ParentComponent = () => {
  const handleButtonClick = (values) => {
    console.log("Title:", values.title);
    console.log("Date:", values.date);
    console.log("Description:", values.description);

    // Add your logic here using the values
  };

  const closeModal = () => {
    // Add logic to close the modal
  };

  return (
    <div>
      <Modal closeModal={closeModal} onButtonClick={handleButtonClick} />
      {/* Add other components or logic as needed */}
    </div>
  );
};

export default ParentComponent;
