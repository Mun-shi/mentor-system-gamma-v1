import React from "react"

function Table() {
  return (
    <div className='overflow-x-auto'>
      <table className='table table-zebra w-full'>
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className='border'></th>
            <th className='border'>Name</th>
            <th className='border'>Job</th>
            <th className='border'>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          <tr>
            <th className='border'>1</th>
            <td className='border'>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
