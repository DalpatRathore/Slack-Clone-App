import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./config";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

const Login = () => {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        // console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://image.flaticon.com/icons/png/512/2111/2111615.png"
          alt=""
        />
        <h1>Sign in to Channel HQ</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
};

export default Login;
