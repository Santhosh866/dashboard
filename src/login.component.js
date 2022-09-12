import React from 'react'
import { useState } from "react";
    const Login = () => {
        const [email, setemail] = useState("");
        const [password, setpassword] = useState("");
        const [ setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
        const users = [{ email: "santhoshyesudas000@gamil.com", password: "santhosh123" }];
        const token = "sdadasdasdasd";
        const handleSubmit = (e) => {
          e.preventDefault()
          const account = users.find((user) => user.email === email);
          console.log(account);
          if (account && account.password === password) {
              setauthenticated(true)
              localStorage.setItem("authenticated", true,);
              localStorage.setItem("tocken", token,);
          }
          else{
            console.log("Failed")
          }
        };
    return (
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" value="Submit">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
    }
export default Login;