import { useState } from "react";

export default function ShowHidePassword() {
  const [isShow, setIsShow] = useState(false);

  function handleShowPassword() {
    setIsShow((isShow) => !isShow);
  }
  return (
    <div>
      <h1>Show Hide Password</h1>
      <input type={isShow ? "text" : "password"} placeholder="Password" />
      <input id="show-password" type="checkbox" onChange={handleShowPassword} />
      <label htmlFor="show-password">Show Password</label>
    </div>
  );
}
