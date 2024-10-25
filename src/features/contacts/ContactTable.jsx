import Spinner from "../../ui/Spinner";
import ContactRow from "./ContactRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useContacts } from "./useContacts";

function ContactTable() {
  const { contacts, isLoading } = useContacts();

  // console.log(contacts);

  if (isLoading) return <Spinner />;
  return (
    <Menus>
      <Table columns="1.8fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Phone Number</div>
        </Table.Header>

        <Table.Body
          data={contacts}
          render={(contact) => (
            <ContactRow contact={contact} key={contact._id} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default ContactTable;
