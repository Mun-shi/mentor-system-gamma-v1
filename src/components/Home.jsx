import { FaChalkboardTeacher } from "react-icons/fa"
import { Link } from "react-router-dom"

function Home() {
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
            <Link
              to='/SelectMenuAllocatedList'
              className='mr-2 btn  btn-outline btn-info btn-lg'
            >
              Allocated List
            </Link>

            {/* <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>
              About
            </Link> */}
            <Link
              to='/AddMentor'
              className=' mr-2 btn  btn-outline btn-info btn-lg'
            >
              Add Mentor
            </Link>
            <Link
              to='/AddMentee'
              className='  mr-2 btn  btn-outline btn-info btn-lg'
            >
              Add Mentee
            </Link>
            <Link
              to='/Allocation'
              className=' mr-2 btn  btn-outline btn-info btn-lg'
            >
              Allocation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
