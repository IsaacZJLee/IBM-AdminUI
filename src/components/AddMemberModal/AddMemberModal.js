import React from "react";
import {
  Modal,
  FormGroup,
  TextInput,
  Select,
  SelectItem
} from "carbon-components-react";

const AddMemberModal = ({ openModal, setOpenModal, modalData, setModalData }) => {
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
      modalHeading="Add new organisation member"
      primaryButtonText="Add Member"
      secondaryButtonText="Cancel"
      onRequestClose={cancel}
      onRequestSubmit={(e) => submit(e)}
    >
      <p>
        Add a new member to your organisation.
      </p>

      <FormGroup style={{ marginTop: '1rem' }}>
        <TextInput
          labelText="First Name"
          placeholder="Jenny"
          required
          style={{ marginBottom: '1rem' }}
        />
        <TextInput
          labelText="Last Name"
          placeholder="Doe"
          required
          style={{ marginBottom: '1rem' }}
        />
        <TextInput
          labelText="Email"
          type="email"
          placeholder="jenny@doe.com"
          required
          style={{ marginBottom: '1rem' }}
        />
        <Select
          labelText="Type"
          defaultValue=""
          style={{ marginBottom: '1rem' }}
        >
          <SelectItem value="student" text="Student" />
          <SelectItem value="registered-nurse" text="Registered Nurse" />
        </Select>
      </FormGroup>
    </Modal>
  );
};

export default AddMemberModal;
