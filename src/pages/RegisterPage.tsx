import { Link } from "react-router-dom";
import { AuthForm, PageContainer } from "../components";

export const RegisterPage = () => {
  return (
    <PageContainer>
      <div className=" center flex-col gap-4  bg-register rounded-md desktop:max-w-[600px] tablet:max-w-[500px]  mobile:max-w-[350px] w-full max-h-[450px] h-full">
        <h1 className="text-3xl font-bold">Register</h1>
        <AuthForm type="register" />{" "}
        <p>
          Already have account?{" "}
          <Link to="/login" className="underline font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </PageContainer>
  );
};
