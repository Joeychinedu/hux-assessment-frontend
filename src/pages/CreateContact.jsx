import { useState } from "react";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

import Spinner from "../ui/Spinner";
import { useCreateContact } from "../features/contacts/useCreateContact";
import Button from "../ui/Button";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

function CreateContact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // const { isLoading, contact } = useContact();
  const { isCreating, createContact } = useCreateContact();

  function handleCreateContact(e) {
    e.preventDefault();
    console.log("click");

    if (!firstName || !lastName || !phoneNumber) return null;
    const newContact = {
      firstName,
      lastName,
      phoneNumber,
    };

    createContact(newContact);
  }

  // if (isLoading) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Add a new contact</Heading>
      </Row>

      <Form>
        <FormRow label="First Name">
          <Input
            type="string"
            defaultValue={""}
            disabled={isCreating}
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormRow>
        <FormRow label="Last Name">
          <Input
            type="string"
            defaultValue={""}
            disabled={isCreating}
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormRow>
        <FormRow label="Phone Number">
          <Input
            type="string"
            defaultValue={""}
            disabled={isCreating}
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormRow>
        <Button onClick={handleCreateContact}>Create new contact</Button>
      </Form>
    </>
  );
}

export default CreateContact;
