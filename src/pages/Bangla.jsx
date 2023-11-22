import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Bangla = () => {
  return (
    <div className="sm:flex items-center sm:h-screen justify-center">
      <div className="rounded-xl w-[100vw] sm:w-[50vw]  border border-green-300 bg-green-500 p-4">
        <ul className="mt-4 space-y-2 w-[100%]">
          <li>
            <Link
              to={"/bangla/Banglaaloccobisoy"}
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">
                বাংলা ব্যকরনের আলোচ্য বিষয়
              </strong>

              <p className="mt-1 text-xs font-medium text-gray-300"></p>
            </Link>
          </li>

          <li>
            <Link
              to={""}
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">ভাষার উৎপত্তি।</strong>

              <p className="mt-1 text-xs font-medium text-gray-300"></p>
            </Link>
            <Link
              to={""}
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">ধ্বনি ও বর্ণ।</strong>

              <p className="mt-1 text-xs font-medium text-gray-300"></p>
            </Link>
          </li>
          <li>
            <Link
              to={""}
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">
                মাত্রা ও অক্ষর{" "}
              </strong>

              <p className="mt-1 text-xs font-medium text-gray-300"></p>
            </Link>
          </li>
          <li>
            <Link
              to={""}
              className="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong className="font-medium text-white">
                শব্দের শ্রেনিবিভাগ ও ধ্বনি পরিবর্তন
              </strong>

              <p className="mt-1 text-xs font-medium text-gray-300"></p>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Bangla;
