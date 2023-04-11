import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Users from "./routes/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "users",
    element: <Users />,
  },
]);

export default router;
