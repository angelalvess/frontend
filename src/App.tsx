import { FiTrash } from 'react-icons/fi';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl">
        <h1 className="text-white text-4xl font-medium">Clients</h1>

        <form className="flex flex-col my-6">
          <label htmlFor="input-name" className="font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="input-name"
            className="w-full mb-5 p-2 rounded mt-1"
          />

          <label htmlFor="input-email" className="font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="input-email"
            className="w-full mb-5 p-2 rounded mt-1"
          />

          <input
            type="submit"
            value="Register"
            className="cursor-pointer w-full p-2 bg-green-500 rounded font-medium"
          />
        </form>

        <section className="flex flex-col bg-red-500">
          <article className=" bg-white w-full rounded p-2 relative hover:scale-105 duration-500">
            <p>
              <span className="font-medium">Name:</span> Angel Alves
            </p>
            <p>
              <span className="font-medium">Email:</span> angie@gmail.com
            </p>
            <p>
              <span className="font-medium">Status:</span> Active
            </p>

            <button className="w-7 h-7 flex items-center justify-center absolute right-0 top-0">
              <FiTrash size={18} color="red" />
            </button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
