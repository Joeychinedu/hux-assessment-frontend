import { useMutation } from "@tanstack/react-query";
import { signup as ApiSignup } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ApiSignup,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Account successfully created!");
      navigate("/");
    },
    onError: (err) => {
      toast.error("There was an error signing you up");
    },
  });

  return { signup, isLoading };
}
