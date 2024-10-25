import { useMoveBack } from "../hooks/useMoveBack";
import { useContact } from "../features/contacts/useContact";
import { useNavigate } from "react-router-dom";
import { useDeleteContact } from "../features/contacts/useDeleteContact";
import styled from "styled-components";

import ContactDataBox from "../features/contacts/ContactDataBox";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import ButtonGroup from "../ui/ButtonGroup";
import Button from "../ui/Button";
import ButtonText from "../ui/ButtonText";

import Modal from "../ui/Modal";
import ConfirmDelete from "../ui/ConfirmDelete";
import Spinner from "../ui/Spinner";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function ContactDetail() {
  const { contact, isLoading } = useContact();
  const { deleteContact, isDeleting } = useDeleteContact();
  const navigate = useNavigate();

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  const { _id: contactId } = contact;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Contact #{contactId}</Heading>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <ContactDataBox contact={contact} />

      <ButtonGroup>
        <Modal>
          <Modal.Open opensWindowName="delete">
            <Button variation="danger">Delete contact</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="contact"
              disabled={isDeleting}
              onConfirm={() =>
                deleteContact(contactId, {
                  onSettled: () => navigate(-1),
                })
              }
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default ContactDetail;
