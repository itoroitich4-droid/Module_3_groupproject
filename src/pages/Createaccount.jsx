import { useState } from "react";
import {useNavigate} from "react-router-dom"

function CreateAccount(){
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

const navigate= useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
const newUser = { username: username,  password: password};

 try { const response = await fetch("http://localhost:3000/users", {
 method: "POST", headers: { "Content-Type": "application/json"
        },
body: JSON.stringify(newUser)
});
 
 if (response.ok) {setMessage("Successfully registered!");
setTimeout(() => {navigate("/login");}, 2000);
}   else { setMessage("Registration failed");
 }
}   catch (error) {console.log(error);
   setMessage("Could not connect to the server");
}
 };
return(
 <>
 <h2>Join Our Fan Community</h2>
 <form onSubmit={handleSubmit} className="loginform">
       <input  type="text" placeholder="Enter username" value={username}
            onChange={(e) => setUsername(e.target.value)} /><br />
     
     <input  type="password" placeholder="Enter password" value={password}
            onChange={(e) => setPassword(e.target.value)} /><br />
            
    <button type="submit">Join</button>
</form>
    {message && <p>{message}</p>}
     <p><strong>Fact:</strong><i>Bladerunner 2049</i> used real handmade miniature models instead of  CGI </p>
</>
    )
}
export default CreateAccount;