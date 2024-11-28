import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { images } from "../../../constants/images";
import { PATH_PARTNERS, PATH_SUPER_ADMIN } from "../../../constants/paths";
import usersRole from "../../../constants/UsersRole";

const Error404 = () => {
  return (
    <div
      className={
        "flex items-center justify-center min-h-full h-full  bg-gray-100 py-10 dark:bg-slate-900"
      }
    >
      <div className="w-full max-w-md h-full p-6 bg-white rounded-lg dark:bg-slate-800 transition-colors shadow-lg text-center flex flex-col">
        <div className=" h-3/5">
          <img
            src={images.notFound}
            alt="Server Down"
            className="mx-auto mb-6 max-w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-2 dark:text-slate-50">
          We couldn’t connect the dots
        </h3>
        <p className="text-sm text-gray-600 mb-6 dark:text-slate-50">
          This page was not found. You may have mistyped the address or
          <br /> the page may have moved.
        </p>

        <Button
          className={`border-2 border-solid border-primary-light dark:border-primary-dark bg-primary-light dark:bg-primary-dark text-white mx-auto hover:bg-primary-light hover:border-primary-light cursor-pointer font-light`}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          {
            <Link
              to={
                usersRole.roleAdmin ? PATH_SUPER_ADMIN.HOME : PATH_PARTNERS.HOME
              }
            >
              {" "}
              Back To Home
            </Link>
          }
        </Button>
      </div>
    </div>
  );
};

export default Error404;
