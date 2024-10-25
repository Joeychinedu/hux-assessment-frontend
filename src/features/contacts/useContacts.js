import { useQuery } from "@tanstack/react-query";
import { getAllContacts } from "../../services/apiContacts";

export function useContacts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["contacts"],
    queryFn: getAllContacts,
  });

  const contacts = data?.data?.contacts;
  console.log("Contacts from useQuery:", data, contacts); // Log to inspect the value

  if (isLoading) {
    console.log("Loading contacts...");
  }

  if (error) {
    console.error("Error loading contacts:", error);
  }

  return { isLoading, contacts, error };
}
