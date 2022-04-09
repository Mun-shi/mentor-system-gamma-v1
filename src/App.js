import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

//context

import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pd-12'>
          <Routes>
            <Route path='/' element={<Home />} />

            {/*  <Route path='/*' element={<StudentForm />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
