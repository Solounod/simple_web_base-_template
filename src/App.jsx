import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { MainPage } from './containers/pages/MainPage'
import { AboutmePage } from './containers/pages/AboutmePage'
import { ContactPage } from './containers/pages/ContactPage'
import { ServicePage } from './containers/pages/ServicePage'


function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/aboutme" element={<AboutmePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
