import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./page/Navbar";

const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Navbar />}></Route>),
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
