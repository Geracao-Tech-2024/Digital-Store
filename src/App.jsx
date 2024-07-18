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
          {/* <Route path='/sobre' element={<Layout children={HomePage} />}/> */}
          {/* possivel melhoria PAGINA 404 */}
          {/* <Route  path='/*' element={<Layout children={()=> (<><h1>404 NOT FOUND</h1></>)} />}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App