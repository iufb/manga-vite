import { SubmitHandler, useForm } from "react-hook-form";
import { formType } from "../../../types/forms/authform.type";
import { useState } from "react";
import { AuthFormProps } from "./AuthForm.props";
import { loginUser, registerUser } from "../../../api/auth/auth";
import { AxiosError } from "axios";
import { Input } from "../../inputs/Input/Input";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";
export const AuthForm = ({
  className,
  type,
  ...props
}: AuthFormProps): JSX.Element => {
  const { register, handleSubmit } = useForm<formType>();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<formType> = async (data: formType) => {
    try {
      const response =
        type === "register" ? await registerUser(data) : await loginUser(data);
      if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }
      response.status == 201 ? navigate("/login") : navigate("/home");
      setError("");
      mutate("user");
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };
  return (
    <form
      className={`${className} w-full col gap-4 mobile:px-4 tablet:px-10  desktop:tablet:px-20`}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="email"
        title="Email"
        {...register("login", { required: true })}
      />
      <Input
        type="password"
        title="Password"
        {...register("password", { required: true, min: 6 })}
      />
      {error && <p className=" text-red-600">{error}</p>}
      <button type="submit" className="btn ">
        {type}
      </button>
    </form>
  );
};
