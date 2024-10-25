import EditContactForm from "../features/contacts/EditContactForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function EditContact() {
  return (
    <Row>
      <Heading as="h1">Edit Contact</Heading>;
      <EditContactForm />
    </Row>
  );
}

export default EditContact;
