import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact as deleteContactApi } from "../../services/apiContacts";
import toast from "react-hot-toast";

export function useDeleteContact() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteContact } = useMutation({
    mutationFn: (id) => deleteContactApi(id),
    onSuccess: () => {
      toast.success("Contact successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isDeleting, deleteContact };
}
