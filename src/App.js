import { useEffect, useState } from "react";
import ListData from "./componentes/ListData";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from "./componentes/About";
import ProductAdd from "./componentes/ProductAdd";
import ProductEdit from "./componentes/ProductEdit";

function App() {
  
 

  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<ListData /> } />
            <Route path="/about" element={<About />} />
            <Route path="/add" element={<ProductAdd />} />
            <Route path="/edit/:id" element={<ProductEdit />} />
          </Routes>
        </Router>
      {/* Nama : {name} <button onClick={changeName}>Change Name</button> */}
    </div>
  );
}

export default App;
