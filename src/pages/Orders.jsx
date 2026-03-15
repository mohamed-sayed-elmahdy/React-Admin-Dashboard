import OrderTable from "@/components/OrderTable";

function Orders() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer">Add Order</button>
      </div>
      <OrderTable/>
    </div>
  )
}

export default Orders;
