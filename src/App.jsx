import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import PageProduct from "./pages/PageProduct/PageProduct";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout children={HomePage} />} exact />
          <Route path="/produto" element={<Layout children={PageProduct} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
