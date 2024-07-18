import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Layout from './pages/Layout/Layout'
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Layout children={HomePage} />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;