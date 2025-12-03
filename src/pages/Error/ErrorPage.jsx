import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="bg-base-100 shadow-lg rounded-xl p-10 text-center max-w-md">
        {/* Error Number */}
        <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
        
        {/* Error Message */}
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Button to go back */}
        <Link to="/">
          <button className="btn btn-primary">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
