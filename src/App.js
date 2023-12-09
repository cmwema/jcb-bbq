import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home, About, Contact, Menu, Cart, Checkout } from "./pages";
import { AppLayout } from "./ui";
import {
  Dashboard,
  AddCategory,
  AddProduct,
  Sales,
  AddTable,
  Delete,
} from "./admin";
import Auth from "./Auth/Auth";
import Error from "./ui/Error"
import { loader as HomeLoader } from "./pages/Home";
import { loader as MenuLoader } from "./pages/Menu";
import { loader as DashBoardLoader } from "./admin/Dashboard";
import { loader as DeleteLoader } from "./admin/Delete";
import { loader as NewProductLoader } from "./admin/AddProduct";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" />;
  }

  return element;
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: HomeLoader,
        errorElement: <Error />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        errorElement: <Error />,
      },
      {
        path: "/admin/login",
        element: <Auth />,
        errorElement: <Error />,
      },
      // Private routes
      {
        path: "/admin",
        element: <PrivateRoute element={<Dashboard />} />,
        loader: DashBoardLoader,
        errorElement: <Error />,
      },
      {
        path: "/admin/sales",
        element: <PrivateRoute element={<Sales />} />,
        errorElement: <Error />,
      },
      {
        path: "/admin/categories/new",
        element: <PrivateRoute element={<AddCategory />} />,
        errorElement: <Error />,
      },
      {
        path: "/admin/products/new",
        element: <PrivateRoute element={<AddProduct />} />,
        errorElement: <Error />,
        loader: NewProductLoader,
      },
      {
        path: "/admin/tables/new",
        element: <PrivateRoute element={<AddTable />} />,
        errorElement: <Error />,
      },
      {
        path: "/admin/delete",
        element: <PrivateRoute element={<Delete />} />,
        errorElement: <Error />,
        loader: DeleteLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
