import React, { useState } from "react";

const LoginButton = () => {
  const [isLogin, setIsLogin] = useState(false);
  const color = isLogin ? "green" : "white";
  document.querySelector("body").style.backgroundColor = color;

  function handleLogin() {
    setIsLogin((isLogin) => !isLogin);
  }

  return (
    <div>
      <h1>Login / Logout Button Toggle</h1>

      {isLogin && <h1>You are Login</h1>}
      {isLogin || <h1>You are Logout</h1>}
      <button onClick={handleLogin}>{isLogin ? "Login" : "Logout"}</button>
    </div>
  );
};

export default LoginButton;
