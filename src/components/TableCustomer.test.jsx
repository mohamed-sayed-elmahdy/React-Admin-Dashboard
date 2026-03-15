import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import TableCustomer from '@/components/TableCustomer';

// Mocking window.confirm for delete test
window.confirm = vi.fn(() => true);

describe('TableCustomer Component', () => {
  it('renders table headers and initial data', () => {
    render(<TableCustomer />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Company Details')).toBeInTheDocument();
    expect(screen.getByText('Account Status')).toBeInTheDocument();
    
    expect(screen.getByText('Alice Thompson')).toBeInTheDocument();
    expect(screen.getByText('Bob Roberts')).toBeInTheDocument();
  });

  it('filters customers based on search term', async () => {
    render(<TableCustomer />);
    const searchInput = screen.getByPlaceholderText(/search customers/i);
    
    fireEvent.change(searchInput, { target: { value: 'Alice' } });
    
    expect(screen.getByText('Alice Thompson')).toBeInTheDocument();
    expect(screen.queryByText('Bob Roberts')).not.toBeInTheDocument();
  });

  it('opens modal when "Add Customer" button is clicked', () => {
    render(<TableCustomer />);
    const addButton = screen.getByText(/Add Customer/i);
    
    fireEvent.click(addButton);
    
    expect(screen.getByText('Add New Customer')).toBeInTheDocument();
  });

  it('adds a new customer successfully', () => {
    render(<TableCustomer />);
    const addButton = screen.getByText(/Add Customer/i);
    fireEvent.click(addButton);
    
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Smith' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Company'), { target: { value: 'New Co' } });
    
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));
    
    // Search for the new customer to ensure it's visible (avoiding pagination issues)
    const searchInput = screen.getByPlaceholderText(/search customers/i);
    fireEvent.change(searchInput, { target: { value: 'John Smith' } });
    
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('New Co')).toBeInTheDocument();
  });

  it('edits an existing customer', () => {
    render(<TableCustomer />);
    
    // Find the row for Alice Thompson and click edit
    const row = screen.getByText('Alice Thompson').closest('tr');
    const editButton = within(row).getByTitle('Edit Customer');
    fireEvent.click(editButton);
    
    expect(screen.getByText('Edit Customer')).toBeInTheDocument();
    
    const nameInput = screen.getByLabelText('Name');
    fireEvent.change(nameInput, { target: { value: 'Alice T. Edited' } });
    
    fireEvent.click(screen.getByRole('button', { name: 'Update' }));
    
    expect(screen.getByText('Alice T. Edited')).toBeInTheDocument();
  });

  it('deletes a customer after confirmation', () => {
    render(<TableCustomer />);
    
    const row = screen.getByText('Bob Roberts').closest('tr');
    const deleteButton = within(row).getByTitle('Delete Customer');
    
    fireEvent.click(deleteButton);
    
    expect(window.confirm).toHaveBeenCalled();
    expect(screen.queryByText('Bob Roberts')).not.toBeInTheDocument();
  });
});
