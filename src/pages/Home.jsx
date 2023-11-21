import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <div className="flex items-center h-screen justify-center">
        <div className="rounded-xl w-[100vw] sm:w-[50vw]  border border-gray-700 bg-gray-800 p-4">
          <ul className="mt-4 space-y-2 w-[100%]">
            <li>
              <Link
                to={"/bangla"}
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">বাংলা</strong>

                <p className="mt-1 text-xs font-medium text-gray-300"></p>
              </Link>
            </li>

            <li>
              <Link
                to={"/english"}
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">ইংরেজি </strong>

                <p className="mt-1 text-xs font-medium text-gray-300"></p>
              </Link>
            </li>
            <li>
              <Link
                to={"/math"}
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">গনিত</strong>

                <p className="mt-1 text-xs font-medium text-gray-300"></p>
              </Link>
            </li>
            <li>
              <Link
                to={"/gk"}
                className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
              >
                <strong className="font-medium text-white">
                  সাধারণ জ্ঞান (GK)
                </strong>

                <p className="mt-1 text-xs font-medium text-gray-300"></p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
