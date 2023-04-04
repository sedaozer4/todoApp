import React, {useState} from "react";

function Login(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signIn(){
        let item = {name, email, password}
        console.warn(item);
        let result = await fetch("http://localhost:8080/api/login", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        result = await result.json()
        console.warn("result", result)
    }

    return(
        <div>
            <br/><br/><br/>
            <h1>SIGN IN</h1>
            <br/><br/>
            <input placeholder="Email" name="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-add form-control"/>
            <input placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)} className="input-add form-control"/><br/><br/><br/>
            <button onClick={signIn} className="edit-button">
                SIGN IN
            </button>
        </div>
    );
}

export default Login
