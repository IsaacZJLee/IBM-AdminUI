import React from "react";
import {
  Modal,
  FormGroup,
  TextInput,
  Select,
  SelectItem
} from "carbon-components-react";

const AddOrganisationModal = ({ openModal, setOpenModal, modalData, setModalData }) => {
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
      modalHeading="Add new organisation"
      primaryButtonText="Add Organisation"
      secondaryButtonText="Cancel"
      onRequestClose={cancel}
      onRequestSubmit={(e) => submit(e)}
    >
      <FormGroup style={{ marginTop: '1rem' }}>
        <TextInput
          labelText="Name"
          placeholder="St Johns Hospital"
          required
          style={{ marginBottom: '1rem' }}
        />
        <Select
          labelText="Type"
          defaultValue=""
          style={{ marginBottom: '1rem' }}
        >
          <SelectItem value="university" text="University" />
          <SelectItem value="hospital" text="Hospital" />
          <SelectItem value="practice" text="Practice" />
          <SelectItem value="pharmacy" text="Pharmacy" />
          <SelectItem value="laboratory" text="Laboratory" />
          <SelectItem value="government" text="Government" />
        </Select>
      </FormGroup>
    </Modal>
  );
};

export default AddOrganisationModal;
