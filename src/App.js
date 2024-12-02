import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./pages/Cart.js";
//import Grocery from "./pages/Grocery";
const Grocery = lazy(() => import("./pages/Grocery"));
const About = lazy(() => import("./pages/About"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //APi Call with username na password

    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading ....</h1>}>
            <Grocery />
          </Suspense>
        ),
        // element: <Grocery />,
      },
      {
        path: "/restraurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
