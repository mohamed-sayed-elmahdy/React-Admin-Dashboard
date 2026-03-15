import TableCustomer from "@/components/TableCustomer";

function Customers() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
      </div>
      <TableCustomer />
    </div>
  )
}

export default Customers;