import api from "./apiAxios";

export async function getAllContacts() {
  try {
    const token = localStorage.getItem("token");

    // Send a GET request to retrieve all contacts
    const { data } = await api.get("/api/v1/contacts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data; // Return only the data property
  } catch (error) {
    console.error(error);
    throw new Error("Contacts could not be loaded");
  }
}

export async function getContact(contactId) {
  try {
    const token = localStorage.getItem("token");
    const id = contactId;

    // Send a GET request to retrieve the contact by ID
    const { data } = await api.get(`/api/v1/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data);
    return data; // Return the retrieved contact data
  } catch (error) {
    console.error(error);
    throw new Error("Contact could not be loaded");
  }
}

export async function createContact(newContact) {
  try {
    const token = localStorage.getItem("token");

    // Send a POST request to create a new contact
    const { data } = await api.post(`/api/v1/contacts`, newContact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data; // Return the newly created contact data
  } catch (error) {
    console.error(error);
    throw new Error("Contact could not be created");
  }
}

export async function editContact(contactId, updatedContactData) {
  try {
    const token = localStorage.getItem("token");

    // Send a PATCH request to update the contact by ID
    const { data } = await api.patch(
      `/api/v1/contacts/${contactId}`,
      updatedContactData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data; // Return the updated contact data
  } catch (error) {
    console.error(error);
    throw new Error("Contact could not be updated");
  }
}

export async function deleteContact(contactId) {
  try {
    const token = localStorage.getItem("token");

    // Send a DELETE request to delete the contact by ID
    const { data } = await api.delete(`/api/v1/contacts/${contactId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data; // Return the response (confirmation of deletion)
  } catch (error) {
    console.error(error);
    throw new Error("Contact could not be deleted");
  }
}
