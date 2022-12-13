import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://protfolio-server-lac.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);