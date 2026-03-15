import React from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

function TableCustomerBody({ data, onEdit, onDelete }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'inactive':
        return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'blocked':
        return 'bg-rose-500/10 text-rose-500 border-rose-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <tbody>
      {data.length === 0 ? (
        <tr>
          <td colSpan="7" className="p-8 text-center text-gray-500 italic">
            No customers found. Try adjusting your search or add a new customer.
          </td>
        </tr>
      ) : (
        data.map((customer) => (
          <tr className='text-center border-b border-black/10 hover:bg-primary/10' key={customer.id}>
            <td className='p-2'>
              <img src={customer.avatar} alt={customer.name} className="mx-auto w-12 h-12 rounded-full" />
            </td>
            <td className='p-2  font-medium '>{customer.name}</td>
            <td className='p-2 '>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{customer.email}</span>
                <span className="text-xs text-gray-500">{customer.phone}</span>
              </div>
            </td>
            <td className='p-2  '>{customer.company}</td>
            <td className='p-2'>
              <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusColor(customer.status)}`}>
                {customer.status}
              </span>
            </td>
            <td className='p-2'>{customer.id}</td>
            <td className='p-2'>
              <div className="flex justify-center gap-2">
                <button 
                  onClick={() => onEdit(customer)}
                  className="p-1 text-primary hover:bg-primary/10 rounded-md transition-colors"
                  title="Edit Customer"
                >
                  <AiOutlineEdit size={20} />
                </button>
                <button 
                  onClick={() => onDelete(customer.id)}
                  className="p-1 text-rose-500 hover:bg-rose-500/10 rounded-md transition-colors"
                  title="Delete Customer"
                >
                  <AiOutlineDelete size={20} />
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}

export default TableCustomerBody;
