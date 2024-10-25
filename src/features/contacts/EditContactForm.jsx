import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useEditContact } from "./useEditContact";
import { useParams } from "react-router-dom";
import { useContact } from "./useContact";
import Spinner from "../../ui/Spinner";

function EditContactForm() {
  const { isUpdating, editContact } = useEditContact();
  const { id: contactId } = useParams();
  const { isLoading, contact } = useContact(contactId); // Fetch the contact based on id

  console.log("Contact ID from URL:", contactId);

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;

    // Use computed property names to correctly update the contact
    editContact(contactId, { [field]: value });
  }

  if (isLoading) return <Spinner />;

  if (!contact) return <p>No contact found.</p>; // Handle case where contact is not available

  const { firstName, lastName, phoneNumber } = contact;

  return (
    <Form>
      <FormRow label="First Name">
        <Input
          type="text"
          defaultValue={firstName || ""}
          disabled={isUpdating || isLoading}
          id="firstName"
          onBlur={(e) => handleUpdate(e, "firstName")}
        />
      </FormRow>
      <FormRow label="Last Name">
        <Input
          type="text"
          defaultValue={lastName || ""}
          disabled={isUpdating || isLoading}
          id="lastName"
          onBlur={(e) => handleUpdate(e, "lastName")}
        />
      </FormRow>
      <FormRow label="Phone Number">
        <Input
          type="string"
          defaultValue={phoneNumber || ""}
          disabled={isUpdating || isLoading}
          id="phoneNumber"
          onBlur={(e) => handleUpdate(e, "phoneNumber")}
        />
      </FormRow>
    </Form>
  );
}

export default EditContactForm;
