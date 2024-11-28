// src/pages/LoginPage/LoginPage.tsx
import React from "react";
import LoginForm from "../../../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
