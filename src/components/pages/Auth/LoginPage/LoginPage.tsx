import { AuthLayout } from "../../../layouts/AuthLayout";
import { LoginForm } from "../../../UI/Auth/LoginForm";

export const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};
