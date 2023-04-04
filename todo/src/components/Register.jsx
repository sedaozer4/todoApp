import React, {useState} from "react";

function Register(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function signUp(){
        let item = {name, email, password}
        console.warn(item);
        let result = await fetch("http://localhost:8080/api/register", {
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
            <h1>SIGN UP</h1>
            <br/><br/>
            <input placeholder="Name" name="text" value={name} onChange={e=>setName(e.target.value)} className="input-add form-control"/>
            <input placeholder="Email" name="email" value={email} onChange={e=>setEmail(e.target.value)} className="input-add form-control"/>
            <input placeholder="Password" name="password" value={password} onChange={e=>setPassword(e.target.value)} className="input-add form-control"/><br/><br/><br/>
            <button onClick={signUp} className="edit-button">
                SIGN UP
            </button>
        </div>
    );
}

export default Register
