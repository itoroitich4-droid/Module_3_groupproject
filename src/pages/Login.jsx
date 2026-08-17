import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email logged in: ${email}`);
  };

  return (
  <div className="p-4 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
    <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded text-black"/>
    <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded text-black"/>
    <button type="submit" className="bg-blue-500 px-4 py-2 rounded w-full">
        Login</button>
    </form>
    </div>
);
}
