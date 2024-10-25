import { Link } from "react-router-dom";
import { HiPencil, HiTrash, HiMiniUserCircle } from "react-icons/hi2";
import styled from "styled-components";

import { useDeleteContact } from "./useDeleteContact";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import EditContactForm from "./EditContactForm";

// const Img = styled.img`
//   display: block;
//   width: 6.4rem;
//   aspect-ratio: 3 / 2;
//   object-fit: cover;
//   object-position: center;
//   transform: scale(1.5) translateX(-7px);
// `;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Phone = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

function ContactRow({ contact }) {
  const { _id: contactId, firstName, lastName, phoneNumber } = contact;
  const { isDeleting, deleteContact } = useDeleteContact();
  return (
    <Table.Row role="row">
      <Name>{firstName}</Name>
      <Name>{lastName}</Name>
      <Phone>{phoneNumber}</Phone>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={contactId} />{" "}
          <Menus.List id={contactId}>
            {/* <Modal.Open opensWindowName="edit contact"> */}
            <Link to={`/contact/edit/${contactId}`}>
              <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
            </Link>
            <Link to={`/contact/details/${contactId}`}>
              <Menus.Button icon={<HiMiniUserCircle />}>Details</Menus.Button>
            </Link>
            {/* </Modal.Open> */}

            <Modal.Open opensWindowName="delete contact">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          </Menus.List>
          <Modal.Window name="edit contact">
            <EditContactForm />
          </Modal.Window>
          <Modal.Window name="delete contact">
            <ConfirmDelete
              resourceName="contact"
              disabled={isDeleting}
              onConfirm={() => deleteContact(contactId)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default ContactRow;
