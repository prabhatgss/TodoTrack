import React from "react";
import todoBack from "../images/todoBack.png";
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { auth} from "./Firebase"
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const email = e.target.email.value;
            const password = e.target.password.value;
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Signed in as:', user.email);
            navigate('/');
        } catch (error) {
          console.error('Error signing in:', error.message);
          if(error.message.includes('wrong-password')){
            alert('Your Password is incorrect')
          }else{
            alert('User not found')
          }
        }
      };
  return (
    <div className="loginCont">
      <div className="loginLeft">
        <img src={todoBack} />
      </div>
      <form className="loginRight" onSubmit={(e)=>handleLogin(e)}>
        <div className="appName">
        TodoTrac
        </div>
        <div class="input-field">
          <i class="fas fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="Username" name="email" required/>
        </div>
        <div class="input-field">
          <i class="fas fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="Password" name="password" required/>
        </div>
        <button className="loginBtn">Login</button>
        <div className="signupTag">Don't have an account? <a href="/signup">Signup</a></div>
      </form>
    </div>
  );
}

export default Login;
