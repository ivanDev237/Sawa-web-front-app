import { images } from "../../../constants/images";
// images

const ServerError = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-center">
        <div>
          <img
            src={images.serverDown}
            alt="Server Down"
            className="mx-auto mb-6 max-w-full h-auto"
          />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Oops, something went wrong
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Server Error 500. We apologize and are fixing the problem.
          <br /> Please try again at a later stage.
        </p>

        {/* <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
          >
              Take me back to Home
          </Link> */}
      </div>
    </div>
  );
};

export default ServerError;
