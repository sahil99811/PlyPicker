
export default function LoginPage() {
    return (
      <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Your Email</label>
          <input
            type="text"
            placeholder="Enter Your Email..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Enter Your Password</label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    );
  }
  