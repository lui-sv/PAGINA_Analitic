import { BrowserRouter, Route, Routes } from "react-router-dom"

import AnaliticPage from "./pages/AnaliticPage"

function App(){
  return(
    <BrowserRouter>    
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/analitic" element={<AnaliticPage />} />
      <Route path="/prueba" element={<h1>prueba</h1>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App