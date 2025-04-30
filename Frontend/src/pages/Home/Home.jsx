import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to the App
      </h1>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md border border-indigo-600 hover:bg-indigo-50"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
