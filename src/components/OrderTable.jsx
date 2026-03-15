import { useMemo, useState, useEffect } from 'react';
import TableHeader from '@/components/TableHeader';
import TableOrderBody from '@/components/TableOrderBody';
import TablePopup from '@/components/TablePopup';
import TableFooter from '@/components/TableFooter';
import product1 from '@/data/product1.jpg';
import product2 from '@/data/product2.jpg';
import product3 from '@/data/product3.jpg';
import product4 from '@/data/product4.jpg';
import product5 from '@/data/product5.jpg';
import product6 from '@/data/product6.jpg';
import product7 from '@/data/product7.jpg';


export const ordersData = [
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    OrderID: 10248,
    CustomerName: 'Vinet',
    TotalAmount: 32.38,
    OrderItems: 'Fresh Tomato',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      product6,
  },
  {
    OrderID: 345653,
    CustomerName: 'Carson Darrin',
    TotalAmount: 56.34,
    OrderItems: 'Butter Scotch',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product5,
  },
  {
    OrderID: 390457,
    CustomerName: 'Fran Perez',
    TotalAmount: 93.31,
    OrderItems: 'Candy Gucci',
    Location: 'New York',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product7,
  },
  {
    OrderID: 893486,
    CustomerName: 'Anika Viseer',
    TotalAmount: 93.31,
    OrderItems: 'Night Lamp',
    Location: 'Germany',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product4,
  },
  {
    OrderID: 748975,
    CustomerName: 'Miron Vitold',
    TotalAmount: 23.99,
    OrderItems: 'Healthcare Erbology',
    Location: 'Spain',
    Status: 'rejected',
    StatusBg: 'red',
    ProductImage:
      product1,
  },
  {
    OrderID: 94757,
    CustomerName: 'Omar Darobe',
    TotalAmount: 95.99,
    OrderItems: 'Makeup Lancome Rouge',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      product2,
  },
  {
    OrderID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    OrderItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    OrderID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    OrderItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
];

export const ordersHeaders = [
    { key: "ProductImage", label: "Image", sortable: false },
  { key: "OrderID", label: "Order ID", sortable: true },
  { key: "CustomerName", label: "Customer Name", sortable: true },
  { key: "TotalAmount", label: "Total Amount", sortable: true },
  { key: "OrderItems", label: "Order Items", sortable: true },
  { key: "Location", label: "Location", sortable: true },
  { key: "Status", label: "Status", sortable: true },
];

function OrderTable() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [sort, setSort] = useState("item");
  const [direction, setDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);



  const sortedOrders = useMemo(() => {
    const data = [...ordersData];

    if (sort === "item") {
      data.sort((a, b) =>
        direction === "asc"
          ? a.OrderItems.localeCompare(b.OrderItems)
          : b.OrderItems.localeCompare(a.OrderItems)
      );
    } else if (sort === "Customer Name") {
      data.sort((a, b) =>
        direction === "asc"
          ? a.CustomerName.localeCompare(b.CustomerName)
          : b.CustomerName.localeCompare(a.CustomerName)
      );
    } else if (sort === "Total Amount") {
      data.sort((a, b) =>
        direction === "asc" ? a.TotalAmount - b.TotalAmount : b.TotalAmount - a.TotalAmount
      );
    } else if (sort === "status") {
      data.sort((a, b) =>
        direction === "asc" ? a.Status.localeCompare(b.Status) : b.Status.localeCompare(a.Status)
      );
    } else if (sort === "Order ID") {
      data.sort((a, b) =>
        direction === "asc" ? a.OrderID - b.OrderID : b.OrderID - a.OrderID
      );
    } else if (sort === "location") {
      data.sort((a, b) =>
        direction === "asc" ? a.Location.localeCompare(b.Location) : b.Location.localeCompare(a.Location)
      );
    }

    return data;
  }, [sort, direction]);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(ordersData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = sortedOrders.slice(startIndex, endIndex);
    

  useEffect(() => {
  setCurrentPage(1);
}, [sort, direction]);

  return (
    <div >
      <table className="w-full min-w-[1024px] bg-[#9f520013] rounded-2xl shadow-neutral-950 relative">
        <TableHeader headers={ordersHeaders} sort={sort} setSort={setSort} direction={direction} setDirection={setDirection} />
        <TableOrderBody data={currentOrders} setSelectedOrder={setSelectedOrder} />
      </table>
      <TableFooter currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      {selectedOrder && <TablePopup data={selectedOrder} onClose={() => setSelectedOrder(null)} />}

    </div>
  )
}

export default OrderTable;
