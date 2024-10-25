import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editContact as ApiEditContact } from "../../services/apiContacts";

export function useEditContact() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: editContact } = useMutation({
    mutationFn: (id, newContact) => ApiEditContact(id, newContact),
    onSuccess: () => {
      toast.success("contact sucessfully updated");
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isUpdating, editContact };
}

export default useEditContact;
