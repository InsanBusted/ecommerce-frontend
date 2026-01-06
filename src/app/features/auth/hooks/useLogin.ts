import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormSchemaType } from "../forms/login";
import { authClient, getErrorMessage } from "@/lib/auth-client";
import { toast } from "sonner";
import { LOCAL_STORAGE_AUTH_TOKEN_KEY } from "../constants/localStorage";

export function useLoginForm() {
  const form = useForm<LoginFormSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormSchemaType) => {
    try {
      console.log("data dari form", data);
      // const { error } = await authClient.signUp.email({
      //   email: data.email,
      //   password: data.password,
      //   name: data.email,
      // });
      const { error, data: authResponseData } = await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });

      if (error?.code) {
        toast.error(getErrorMessage(error.code));

        return;
      }

      if (authResponseData?.token) {
        localStorage.setItem(
          LOCAL_STORAGE_AUTH_TOKEN_KEY,
          authResponseData?.token
        );
      }

      toast.success("sukses login");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return {
    form,
    onSubmit,
  };
}
