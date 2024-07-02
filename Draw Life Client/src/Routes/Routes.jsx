import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layout/Roots";
import AddCraft from "../Pages/AddToCart/AddCraft";
import AllArts from "../Pages/All Arts/AllArts";
import AllandAll from "../Pages/AllAndAll/AllandAll";
import CategoryCard from "../Pages/Category Card/CategoryCard";
import Error from "../Pages/Error/Error";
import Card from "../Pages/Home/Card";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyArtList from "../Pages/My Art List/MyArtList";
import OurReview from "../Pages/Our Reviews/OurReview";
import Register from "../Pages/Register/Register";
import UpdatePaints from "../Pages/Update Paints/UpdatePaints";
import WeAre from "../Pages/We Are/WeAre";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement : <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignmint-10-server.vercel.app/paints"),
      },
      {
        path: "/addcraft",
        element: (
          <PrivateRoutes>
            <AddCraft></AddCraft>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allarts",
        element: <AllArts></AllArts>,
        loader: () => fetch("https://assignmint-10-server.vercel.app/paints"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/card/:id",
        element: (
          <PrivateRoutes>
            <Card></Card>
          </PrivateRoutes>
        ),
        loader : ()=> fetch('https://assignmint-10-server.vercel.app/paints')
      },
      {
        path: "/myartlist/:email",
        element: (
          <PrivateRoutes>
            <MyArtList></MyArtList>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://assignmint-10-server.vercel.app/paints/${params.email}`),
      },



      {
        path: "/updatepaint/:id",
        element: (
          <PrivateRoutes>
            <UpdatePaints></UpdatePaints>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://assignmint-10-server.vercel.app/paint/${params.id}`),
      },
      {
        path: '/weare',
        element : <WeAre></WeAre>
      },
      {
        path : '/ourreview',
        element : <OurReview></OurReview>
      },
      {
        path : '/category',
        element : <CategoryCard></CategoryCard>,
      },
      {
        path : '/allandall/:name',
        element : <AllandAll></AllandAll>,
        loader : ({params})=> fetch(`https://assignmint-10-server.vercel.app/whole/${params.name}`)
      }

    ],
  },
]);

export default router;
