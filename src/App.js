import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import SingleNews from "./Components/SingleNews/SingleNews";
import Faviourites from "./Components/Faviourites/Faviourites";
import CatNews from "./Components/CatNews/CatNews";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer theme='colored' transition={Slide} autoClose={3000} hideProgressBar={true}></ToastContainer>

    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/:news",
          element: <SingleNews />
        },
        {
          path: "/faviourites",
          element: <Faviourites />
        },
        {
          path: "/categories/:cat",
          element: <CatNews />
        },
        {
          path: "/singlenews/:news",
          element: <SingleNews />
        },

      ]

    },
    {
      path: "/register",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <SignIn />
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;


// https://dribbble.com/shots/23015148-Adventure-Today-News-Website