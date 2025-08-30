import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "profile/:name",
//     element: <Profile />,
//   },
//   // {
//   //   path: "profile",
//   //   element: <Profile />,
//   //   children: [
//   //     {
//   //       index: true,
//   //       element: <DefaultProfile />,
//   //     },
//   //     {
//   //       path: "spinach",
//   //       element: <Spinach />,
//   //     },
//   //     {
//   //       path: "popeye",
//   //       element: <Popeye />,
//   //     },
//   //   ],
//   // },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
