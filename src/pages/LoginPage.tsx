import { Link } from "react-router-dom";
import { AuthForm, PageContainer } from "../components";

export const LoginPage = () => {
  return (
    <PageContainer>
      <div className=" h-full center  flex-col gap-4  bg-login rounded-md desktop:max-w-[600px] tablet:max-w-[500px]  mobile:max-w-[380px] w-full max-h-[450px]">
        <h1 className="text-3xl font-bold">Login</h1>
        <AuthForm type="login" />
        <p>
          Don&apos;t have account?{" "}
          <Link to={"/register"} className="underline font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </PageContainer>
  );
};
