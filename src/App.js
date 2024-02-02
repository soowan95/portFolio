import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home";
import Crello from "./page/project/crello/Crello";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/portfolio" element={<Home />} />
      <Route path="/prj/crello" element={<Crello />} />
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
