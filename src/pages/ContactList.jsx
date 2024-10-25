import { useUser } from "../contexts/UserContext";
import ContactTable from "../features/contacts/ContactTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function ContactList() {
  const { user } = useUser();
  console.log(user, useUser());
  return (
    <div>
      <Row type="horizontal">
        <Heading as="h1">
          Here are all your contacts {user && user.firstName}
        </Heading>
      </Row>

      <Row>
        <ContactTable />
      </Row>
    </div>
  );
}

export default ContactList;
