import AuthRootLayout from "../../presentation/layout/auth/AuthRootLayout";
import DashPrivateLayout from "../../presentation/layout/dashboard/DashPrivateLayout";
import Login from "../../presentation/pages/auth/Login";
import Register from "../../presentation/pages/auth/Register";
import { createBrowserRouter } from "react-router-dom";
import ListaRegistro from "../../presentation/pages/dashboard/ListaRegistro";
import Registro from "../../presentation/pages/dashboard/Registro";
import Graficas from "../../presentation/pages/dashboard/Graficas";
import Consultas from "../../presentation/pages/dashboard/Consultas";

export const router = createBrowserRouter(

    [
      {
        path:"/",
        element:<AuthRootLayout />,
        children:[
          {
            index:true,
            element:<Login />
          },
          {
            path:"/register",
            element:<Register />
          },
        ],
      },
      {
        path:"/dashboard",
        element:<DashPrivateLayout />,
        children:[
          {
            index: true,
            element:<Graficas />
          },
          {
            path:"grafica",
            element:<Graficas />
          },
          {
            path:"registro",
            element:<Registro />
          },
          {
            path:"ListaRegistro",
            element:<ListaRegistro />
          },
          {
            path:"Consultas",
            element:<Consultas />
          },
        ]  
      }

    ]
);