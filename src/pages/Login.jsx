import AuthForm from "../components/AuthForm";

export default function Login() {
  const handleLogin = (email, password) => {
    // Temporary login credentials
    if (email === "admin@example.com" && password === "123456") {
      return true;
    }

    return false;
  };

  return <AuthForm onLogin={handleLogin} />;
}
