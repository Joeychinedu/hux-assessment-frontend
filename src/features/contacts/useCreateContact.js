import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContact as ApiCreateContact } from "../../services/apiContacts";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateContact() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isCreating, mutate: createContact } = useMutation({
    mutationFn: (newContact) => ApiCreateContact(newContact),
    onSuccess: () => {
      toast.success("New contact sucessfully created");
      queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
      navigate("/contacts");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isCreating, createContact };
}
