import React from "react";
import {
  Modal,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody,
} from "carbon-components-react";

const ApproveRegistrationModal = ({ openModal, setOpenModal, modalData, setModalData }) => {
  const submit = (e) => {
    e.preventDefault();
    
    setOpenModal(false);
    // TODO: handle updating data
  };

  const cancel = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      modalHeading="Review pending member registration"
      primaryButtonText="Approve"
      secondaryButtonText="Deny"
      onRequestClose={cancel}
      onRequestSubmit={(e) => submit(e)}
    >
      <p>
        Approve or deny the following pending member registration for your organisation.
      </p>

      <div>
        <StructuredListWrapper>
          <StructuredListHead>
            <StructuredListRow head>
              <StructuredListCell head></StructuredListCell>
              <StructuredListCell head></StructuredListCell>
            </StructuredListRow>
          </StructuredListHead>

          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell noWrap><h6>First Name</h6></StructuredListCell>
              <StructuredListCell>{modalData.first_name}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell noWrap><h6>Last Name</h6></StructuredListCell>
              <StructuredListCell>{modalData.last_name}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
          <StructuredListBody>
            <StructuredListRow>
              <StructuredListCell noWrap><h6>Type</h6></StructuredListCell>
              <StructuredListCell>{modalData.type}</StructuredListCell>
            </StructuredListRow>
          </StructuredListBody>
        </StructuredListWrapper>
      </div>
    </Modal>
  );
};

export default ApproveRegistrationModal;
