import EmployeeTable from "@/components/EmployeeTable";

function Employees() {
  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Employees</h1>
        <button className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer">Add Employee</button>
      </div>
      <EmployeeTable />
    </div>
  )
}

export default Employees