import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <NavLink to="profile">Profile</NavLink> |{" "}
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <hr />

      {/* 👇 This is where child routes will render */}
      <Outlet />
    </div>
  );
}
