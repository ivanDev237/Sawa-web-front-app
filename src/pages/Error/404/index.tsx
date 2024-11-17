import BtnAct from "../../../components/Button";
import { images } from "../../../constants/images";

const Error404 = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-div_BgColors flex-col items-center">
      <div className="mt-10 mb-5 w-full max-w-xs sm:w-96 flex justify-center">
        <img
          src={images.notFound}
          alt="page notFound img"
          className="w-full max-w-xs md:max-w-md"
        />
      </div>
      <div className="text-center grid grid-cols-1 grid-rows-2 items-center px-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold">
          We couldn’t connect the dots
        </h1>

        <p className="text-sm sm:text-base md:text-lg w-[80%] sm:w-[75%] mx-auto">
          This page was not found. You may have mistyped the address or the page
          may have moved.
        </p>
      </div>

      <BtnAct>Take me back to home</BtnAct>
    </div>
  );
};

export default Error404;
