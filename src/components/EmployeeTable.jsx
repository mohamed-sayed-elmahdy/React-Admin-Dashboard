import { useState, useMemo, useEffect } from "react";
import TableHeader from "@/components/TableHeader";
import TableEmployeeBody from "@/components/TableEmployeeBody";
import TableFooter from "@/components/TableFooter";
import employee1 from '@/data/avatar.jpg';
import employee2 from '@/data/avatar4.jpg';
import employee4 from '@/data/avatar3.png';
import employee5 from '@/data/avatar4.jpg';
import employee6 from '@/data/avatar4.jpg';

export const employeesData = [
  { id: 1, name: 'Nancy Davolio', position: 'Sales Representative', country: 'Egypt', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee1 },
  { id: 2, name: 'Nasimiyu Danai', position: 'Marketing Head', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee2 },
  { id: 3, name: 'Iulia Albu', position: 'HR', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee6 },
  { id: 4, name: 'Siegbert Gottfried', position: 'Marketing Head', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee4 },
  { id: 5, name: 'Omar Darobe', position: 'HR', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee5 },
  { id: 6, name: 'Penjani Inyene', position: 'Marketing Head', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee6 },
  { id: 7, name: 'Miron Vitold', position: 'HR', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee1 },
  { id: 8, name: 'Nancy Davolio', position: 'Sales Representative', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee2 },
  { id: 9, name: 'Nasimiyu Danai', position: 'Marketing Head', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee6 },
  { id: 10, name: 'Iulia Albu', position: 'HR', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee4 },
  { id: 11, name: 'Siegbert Gottfried', position: 'Marketing Head', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee5 },
  { id: 12, name: 'Omar Darobe', position: 'HR', country: 'USA', hireDate: '01/02/2021', reportsTo: 'Carson', avatar: employee6 },
];

export const employeesHeaders = [
    { key: "avatar", label: "Employee", sortable: false },
  { key: "name", label: "Name", sortable: true },
  { key: "position", label: "Position", sortable: true },
  { key: "country", label: "Country", sortable: true },
  { key: "hireDate", label: "Hire Date", sortable: true },
  { key: "reportsTo", label: "Reports To", sortable: true },
  { key: "id", label: "Employee ID", sortable: true },
];

function EmployeeTable() {
  const [sort, setSort] = useState("name");
  const [direction, setDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);

  // Sort Employees
  const sortedEmployees = useMemo(() => {
    const data = [...employeesData];

    if(sort === 'name') {
      data.sort((a,b) => direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    } else if(sort === 'position') {
      data.sort((a,b) => direction === 'asc' ? a.position.localeCompare(b.position) : b.position.localeCompare(a.position));
    } else if(sort === 'country') {
      data.sort((a,b) => direction === 'asc' ? a.country.localeCompare(b.country) : b.country.localeCompare(a.country));
    } else if(sort === 'hireDate') {
      data.sort((a,b) => direction === 'asc' ? new Date(a.hireDate) - new Date(b.hireDate) : new Date(b.hireDate) - new Date(a.hireDate));
    } else if(sort === 'reportsTo') {
      data.sort((a,b) => direction === 'asc' ? a.reportsTo.localeCompare(b.reportsTo) : b.reportsTo.localeCompare(a.reportsTo));
    } else if(sort === 'id') {
      data.sort((a,b) => direction === 'asc' ? a.id - b.id : b.id - a.id);
    }

    return data;
  }, [sort, direction]);

  // Reset page when sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sort, direction]);

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEmployees = sortedEmployees.slice(startIndex, endIndex);

  return (
    <div>
         <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
      <table className="w-full min-w-[1024px] bg-[#9f520013] rounded-2xl shadow-neutral-950 relative">
        <TableHeader headers={employeesHeaders} sort={sort} setSort={setSort} direction={direction} setDirection={setDirection} />
        <TableEmployeeBody data={currentEmployees} />
      </table></div>

      <TableFooter currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default EmployeeTable;