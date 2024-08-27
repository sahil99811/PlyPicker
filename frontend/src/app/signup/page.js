
export default function SignupPage() {
    return (
      <form className="max-w-md  p-6 bg-white shadow-md rounded-md mx-auto h-[100vh] my-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Your Password..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="role"
              value="admin"
              className="text-indigo-600"
            />
            <span className="ml-2">Admin</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="role"
              value="team-member"
              className="text-indigo-600"
            />
            <span className="ml-2">Team Member</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign Up
        </button>
      </form>
    );
  }
  