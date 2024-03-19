import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Projectsmain from "./components/Projectsmain";
import About from "./components/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project",
    element: <Projectsmain />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
