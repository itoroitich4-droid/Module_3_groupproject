import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const navigate = useNavigate();

const handleSubmit = async (e) => {e.preventDefault();
   const response = await fetch("http://localhost:3000/users");
   const users = await response.json();
 const user = users.find((user) =>user.username === username && user.password === password );

if (user) {setMessage("Login successful!");
 setTimeout(() => {navigate("/home");}, 2000);
} else { setMessage("Incorrect username or password");
}
    };
return ( <>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="username"  value={username}
     onChange={(e) => setUsername(e.target.value)}/> <br />
<input type="password" placeholder="password" value={password}
     onChange={(e) => setPassword(e.target.value)} /><br />
<button type="submit">Sign in</button><br />
 <p><i>Have no account?</i></p>
    <Link to="/login/create">
    <button type="button">Create account</button></Link>
</form>
            {message && <p>{message}</p>}
<p><strong>Fact:</strong> in <em>Evil Dead Rise</em> they used
                over 6,500 litres of fake Blood</p>
</>
);
}

export default Login;