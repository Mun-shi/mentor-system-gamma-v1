import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

//context

//pages
import TreacherForm from "./Pages/Form/TreacherForm"
import NotFound from "./Pages/NotFound"
import StudentForm from "./Pages/Form/StudentForm"
import Home from "./components/Home"
import Allocation from "./Pages/Allocation/Allocation"
import Allocation2 from "./Pages/Allocation/Allocation2"
import AllocatedList from "./Pages/Report/AllocatedList"
import EditAllocatedList from "./Pages/Report/EditAllocatedList"
import SelectMenuAllocatedList from "./Pages/Report/SelectMenuAllocatedList"

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto px-3 pd-12'>
          <Routes>
            <Route path='/AddMentor' element={<TreacherForm />} />
            <Route path='/AddMentee' element={<StudentForm />} />
            <Route path='/' element={<Home />} />
            <Route path='/notfound' element={<NotFound />} />
            {/* <Route path='/about' element={<NotFound />} /> */}
            <Route path='/Allocation' element={<Allocation />} />
            <Route path='/Allocation2' element={<Allocation2 />} />
            <Route path='/AllocatedList' element={<AllocatedList />} />
            <Route path='/EditAllocatedList' element={<EditAllocatedList />} />
            <Route
              path='/SelectMenuAllocatedList'
              element={<SelectMenuAllocatedList />}
            />

            {/*  <Route path='/*' element={<StudentForm />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
