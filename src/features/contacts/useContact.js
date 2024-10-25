import { useQuery } from "@tanstack/react-query";
import { getContact } from "../../services/apiContacts";
import { useParams } from "react-router-dom";

export function useContact() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["contacts", id],
    queryFn: () => getContact(id),
  });

  const contact = data?.data?.contact; // This depends on your API response structure

  return { isLoading, contact, error };
}
