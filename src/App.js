import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/portfolio" element={<Home />}>
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
