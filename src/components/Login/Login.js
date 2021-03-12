import React,{useState} from 'react';
import './Login.css';
import role_group from '../../data/role_grant';
import users from '../../data/user';

import { useHistory } from "react-router-dom";


const Login = ({ logIn }) => {

    const [username,setUserName] = useState('');
    const [secret,setSecret] = useState('');

    const history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        let find = handleLogin();
        if(find.length > 0){
            // console.log("HERE WE HAVE TO ADD USER TO THE STATE - ",find[0].username)
            let role = fetchRole(find[0].role);
            let userAccess = {
                username: find[0].username,
                role: role[0]
            }
            logIn(userAccess)
            // console.log("HERE WE HAVE TO ADD ROLE TO THE STATE - ",role)
            history.push("/");
        }else{
            alert('Valida tu información',secret)
        }
    }

    function handleLogin() {
        const find = users.filter(item => (item.username === username && item.password === secret) );
        return find
    }

    function fetchRole( userRole ){
        let role = role_group.filter(item => (item.role === userRole) );
        return role;
    }
    
    return (
        <div className="loginContainer">
            Soy un login
            <form onSubmit={handleClick} className="formLogin">
                <input type="text" name="user" onChange = { e => setUserName(e.target.value) } ></input>
                <input type="password" name="secret" onChange = { e => setSecret(e.target.value) } ></input>
                <button> Login </button>
            </form>
        </div>
    )
}

export default Login;