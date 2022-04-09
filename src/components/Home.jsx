import { FaChalkboardTeacher } from "react-icons/fa"
import { Link } from "react-router-dom"

function Home() {
  const handleOnExport = () => {}

  return (
    <div className='hero'>
      <div className='text-center  hero-content'> </div>
      <div className='max-w-full'>
        <h1 className=' text-8xl   font-bold mb-8'>
          <div className='w-full flex justify-center'>
            <FaChalkboardTeacher className='  mr-5 inline-flex' />
          </div>
          <div>
            Mentor System
            <h3 className='text-5xl mt-5 text-center mx-auto'>welcome</h3>
          </div>
        </h1>

        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <button
              // id={tempSemester}
              onClick={handleOnExport}
              className='btn  m-3 btn-lg   btn-outline btn-accent'
            >
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
