import React from "react";

function TableOrderBody({ data, setSelectedOrder }) {
  return (
    <tbody>
      {data.map((order, index) => (
        <tr key={index} className="border-b border-black/10 hover:bg-primary/10 cursor-pointer" onClick={() => setSelectedOrder(order)}>

          <td className="p-2">
            <img
              src={order.ProductImage}
              alt={order.OrderItems}
              className="w-10 h-10 rounded-lg object-cover mx-auto"
            />
          </td>

          <td className="p-2 text-center">{order.OrderItems}</td>
          <td className="p-2 text-center">{order.CustomerName}</td>
          <td className="p-2 text-center">${order.TotalAmount}</td>

          <td className="p-2 text-center capitalize">
            <div className="inline-block px-2 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: order.StatusBg, color: "white" }}
            >
              {order.Status}
            </div>
          </td>

          <td className="p-2 text-center">{order.OrderID}</td>
          <td className="p-2 text-center">{order.Location}</td>

        </tr>
      ))}
    </tbody>
  );
}

export default TableOrderBody;
