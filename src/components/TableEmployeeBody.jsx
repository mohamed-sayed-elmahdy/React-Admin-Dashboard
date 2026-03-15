import React from 'react'

function TableEmployeeBody({ data }) {
  return (
  
        <tbody>
            {data.map((employee) => (
                <tr className='text-center border-b border-black/10 hover:bg-primary/10' key={employee.id}>
                    <td className='p-2'>
                        <img src={employee.avatar} alt={employee.name} className=" mx-auto w-12 h-12 rounded-full" />
                    </td>
                    <td className='p-2'>{employee.name}</td>
                    <td className='p-2'>{employee.position}</td>
                    <td className='p-2'>{employee.country}</td>
                    <td className='p-2'>{employee.hireDate}</td>
                    <td className='p-2'>{employee.reportsTo}</td>
                    <td className='p-2'>{employee.id}</td>
                </tr>
            ))}
        </tbody>
  )
}

export default TableEmployeeBody