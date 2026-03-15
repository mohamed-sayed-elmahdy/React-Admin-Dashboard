import { useState, useMemo, useEffect } from "react";
import TableHeader from "@/components/TableHeader";
import TableCustomerBody from "@/components/TableCustomerBody";
import TableFooter from "@/components/TableFooter";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import customer1 from '@/data/avatar.jpg';
import customer2 from '@/data/avatar4.jpg';
import customer3 from '@/data/avatar3.png';
import customer4 from '@/data/avatar4.jpg';

export const initialCustomersData = [
  { id: 1, name: 'Alice Thompson', email: 'alice.t@example.com', phone: '+1 234 567 8901', company: 'TechNova Solutions', status: 'Active', avatar: customer1 },
  { id: 2, name: 'Bob Roberts', email: 'bob.r@example.com', phone: '+1 234 567 8902', company: 'Global Logistics', status: 'Inactive', avatar: customer2 },
  { id: 3, name: 'Charlie Dean', email: 'charlie.d@example.com', phone: '+1 234 567 8903', company: 'Apex Systems', status: 'Blocked', avatar: customer3 },
  { id: 4, name: 'Diana Prince', email: 'diana.p@example.com', phone: '+1 234 567 8904', company: 'Themyscira Corp', status: 'Active', avatar: customer4 },
  { id: 5, name: 'Edward Norton', email: 'edward.n@example.com', phone: '+1 234 567 8905', company: 'Fight Club Co.', status: 'Active', avatar: customer1 },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona.g@example.com', phone: '+1 234 567 8906', company: 'South Side Dev', status: 'Inactive', avatar: customer2 },
  { id: 7, name: 'George Miller', email: 'george.m@example.com', phone: '+1 234 567 8907', company: 'Miller Motors', status: 'Active', avatar: customer3 },
  { id: 8, name: 'Hannah Abbott', email: 'hannah.a@example.com', phone: '+1 234 567 8908', company: 'Abbott Labs', status: 'Blocked', avatar: customer4 },
  { id: 9, name: 'Ian Wright', email: 'ian.w@example.com', phone: '+1 234 567 8909', company: 'Wright Bros', status: 'Active', avatar: customer1 },
  { id: 10, name: 'Jane Doe', email: 'jane.d@example.com', phone: '+1 234 567 8910', company: 'Acme Corp', status: 'Inactive', avatar: customer2 },
];

export const customersHeaders = [
  { key: "avatar", label: "Avatar", sortable: false },
  { key: "name", label: "Name", sortable: true },
  { key: "contact", label: "Contact Information", sortable: true },
  { key: "company", label: "Company Details", sortable: true },
  { key: "status", label: "Account Status", sortable: true },
  { key: "id", label: "Customer ID", sortable: true },
  { key: "actions", label: "Actions", sortable: false },
];

function TableCustomer() {
  const [customers, setCustomers] = useState(initialCustomersData);
  const [sort, setSort] = useState("name");
  const [direction, setDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Filter Customers
  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => 
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [customers, searchTerm]);

  // Sort Customers
  const sortedCustomers = useMemo(() => {
    const data = [...filteredCustomers];

    if(sort === 'name') {
      data.sort((a,b) => direction === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    } else if(sort === 'contact') {
      data.sort((a,b) => direction === 'asc' ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email));
    } else if(sort === 'company') {
      data.sort((a,b) => direction === 'asc' ? a.company.localeCompare(b.company) : b.company.localeCompare(a.company));
    } else if(sort === 'status') {
      data.sort((a,b) => direction === 'asc' ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status));
    } else if(sort === 'id') {
      data.sort((a,b) => direction === 'asc' ? a.id - b.id : b.id - a.id);
    }

    return data;
  }, [filteredCustomers, sort, direction]);

  // Reset page when sort or filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [sort, direction, searchTerm]);

  // Pagination
  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCustomers = sortedCustomers.slice(startIndex, startIndex + itemsPerPage);

  // CRUD Handlers
  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleSave = (customerData) => {
    if (selectedCustomer) {
      setCustomers(prev => prev.map(c => c.id === selectedCustomer.id ? { ...c, ...customerData } : c));
    } else {
      const newId = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
      setCustomers(prev => [...prev, { ...customerData, id: newId, avatar: customer1 }]);
    }
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="relative flex-1 min-w-[300px]">
          <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search customers by name, email or company..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button 
          onClick={() => { setSelectedCustomer(null); setIsModalOpen(true); }}
          className="bg-primary text-white px-6 py-2 rounded-lg cursor-pointer flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <AiOutlinePlus size={20} /> Add Customer
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-black/10 shadow-sm">
        <table className="w-full min-w-[1024px] bg-[#9f520013]">
          <TableHeader headers={customersHeaders} sort={sort} setSort={setSort} direction={direction} setDirection={setDirection} />
          <TableCustomerBody 
            data={currentCustomers} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </table>
      </div>

      <TableFooter currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />

      {isModalOpen && (
        <CustomerModal 
          customer={selectedCustomer} 
          onClose={() => { setIsModalOpen(false); setSelectedCustomer(null); }} 
          onSave={handleSave} 
        />
      )}
    </div>
  );
}

// Inline CustomerModal for now (could be moved to separate file)
function CustomerModal({ customer, onClose, onSave }) {
  const [formData, setFormData] = useState(customer || {
    name: '',
    email: '',
    phone: '',
    company: '',
    status: 'Active'
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 transform transition-all animate-popup">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{customer ? 'Edit Customer' : 'Add New Customer'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <AiOutlinePlus className="rotate-45" size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input 
              id="name"
              type="text" 
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-rose-500 focus:ring-rose-200' : 'border-gray-200 focus:ring-primary/50'}`}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-rose-500 focus:ring-rose-200' : 'border-gray-200 focus:ring-primary/50'}`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input 
              id="phone"
              type="text" 
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input 
              id="company"
              type="text" 
              className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.company ? 'border-rose-500 focus:ring-rose-200' : 'border-gray-200 focus:ring-primary/50'}`}
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
            {errors.company && <p className="text-rose-500 text-xs mt-1">{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              id="status"
              className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Blocked">Blocked</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              {customer ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TableCustomer;
