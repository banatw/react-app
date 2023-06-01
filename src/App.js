import ListData from "./componentes/ListData";
import { BrowserRouter as Router,Route,Routes,Link,Outlet, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import About from "./componentes/About";
import ProductAdd from "./componentes/ProductAdd";
import ProductEdit from "./componentes/ProductEdit";
import RootLayout from "./componentes/RootLayout";

const router1 = createBrowserRouter(
  createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route path="/data" element={<ListData /> } />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<ProductAdd />} />
            <Route path="/edit/:id" element={<ProductEdit />} />
          </Route>
  )
)

function App() {
  return (
    <div><RouterProvider router={router1} /> </div>
  );
}

export default App;
