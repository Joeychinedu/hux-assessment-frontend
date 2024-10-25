import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as ApiLogout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { logoutUser } = useUser();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: ApiLogout,
    onSuccess: () => {
      queryClient.removeQueries();
      logoutUser();
      navigate("/", { replace: true });
    },
  });

  return { logout, isLoading };
}
