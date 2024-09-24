import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
  const [email, setEmail] = useState();   
  const [password, setPassword] = useState();
  const Navigate = useNavigate();

  const handleSumit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login',{email,password})
    .then(result => {console.log(result)
        
        if(result.data ==="success") {
        
        Navigate("/UserInput")
        }
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
     

      {/* d-flex justify-content-center align-items-center bg-secondary vh-100 */}
      <div className="login">
      <h2>Login Here!!</h2>
        <div className="rounded w-50">
          {/* <h2>Login Here!!</h2> */}

          <form onSubmit={handleSumit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>                     
              </label>
              <input 
                type="email" 
                placeholder="Enter your email"
                autoComplete="off"
                className="form-control rounded-0" 
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>                     
              </label>
              <input 
                type="password" 
                placeholder="Enter your password"
                className="form-control rounded-0" 
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0">
              LOGIN
            </button>
          </form> 
          <p>Don't have an account?</p>
          <Link to="/signup" className="btn btn-default border w-100 rounded-0 text-decoration-none">
            Signup!
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;