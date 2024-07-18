import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <div>
      <Layout children={HomePage} />
    </div>
  );
}

export default App;
