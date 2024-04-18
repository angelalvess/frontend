import { FiTrash } from 'react-icons/fi';
import { api } from './services/api';
import { useEffect, useState, useRef } from 'react';

import './App.css';

interface CustomerProps {
  id: string;
  name: string;
  email: string;
  status: boolean;
}

function App() {
  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nameInputRef.current || !emailInputRef.current) {
      return;
    }

    const response = await api.post('/customer', {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
    });

    setCustomers([...customers, response.data]);

    nameInputRef.current.value = '';
    emailInputRef.current.value = '';
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete('/customer', {
        params: {
          id,
        },
      });

      setCustomers(customers.filter((customer) => customer.id !== id));
    } catch (error) {
      alert('Error deleting customer');
    }
  };

  const loadCustomers = async () => {
    const response = await api.get('/customers');
    setCustomers(response.data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-white text-4xl font-medium">Clients</h1>

        <form className="flex flex-col my-6" onSubmit={handleSubmit}>
          <label htmlFor="input-name" className="font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="input-name"
            className="w-full mb-5 p-2 rounded mt-1"
            ref={nameInputRef}
          />

          <label htmlFor="input-email" className="font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="input-email"
            className="w-full mb-5 p-2 rounded mt-1"
            ref={emailInputRef}
          />

          <input
            type="submit"
            value="Register"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        <section className="flex flex-col gap-4">
          {customers.map((customer) => (
            <article
              key={customer.id}
              className=" bg-white w-full rounded p-2 relative hover:scale-105 duration-500"
            >
              <p>
                <span className="font-medium">Name:</span> {customer.name}
              </p>
              <p>
                <span className="font-medium">Email:</span> {customer.email}
              </p>
              <p>
                <span className="font-medium">Status:</span>{' '}
                {customer.status ? 'Active' : 'Inactive'}
              </p>

              <button
                onClick={() => handleDelete(customer.id)}
                className="w-7 h-7 flex items-center justify-center absolute right-0 top-0"
              >
                <FiTrash size={18} color="red" />
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
