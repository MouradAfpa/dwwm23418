import Operation from "./features/Operation";
import TaskTable from "./features/TaskTable";
import Dashboard from "./features/dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";


const routess = [
  {
    path: "/",
    name: 'accueil',
    element: <Dashboard />,
  },
  {
    path: "/user",
    name: 'utilisateur',
    element: <Dashboard />,
    children: [
      {
        path: "/user/:id",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/operation",
    name: 'operation',
    element: <Operation />,
    children: [
      {
        path: "/operation/:id",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/customer",
    name: 'client',
    element: <Dashboard />,
    children: [
      {
        path: "/customer/:id",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Dashboard />,
  },
]

const router = createBrowserRouter(routess);

  export default router;