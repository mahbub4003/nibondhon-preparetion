import Alocchabisoy from "./Alocchabisoy";
import Footer from "./Footer";

const Banglaaloccobisoy = () => {
  return (
    <div className="bg-gray-100 w=[100vw] p-1 sm:p-7">
      <h1 className=" flex items-center justify-center w-[100%] bg-green-100 text-2xl">
        বাংলা ব্যকরনের আলোচ্য বিষয়{" "}
      </h1>
      <div>
        <div className="m-5 p-3 bg-white">
          <h2 className="text-xl">বাংলা ব্যকরনের আলোচ্য বিষয় চারটি। </h2>
          <p>
            যেমনঃ{" "}
            <span className="flex sm:justify-between ml-5 flex-wrap">
              <span className="text-red-700 ml-5 mr-[50px]">
                ক- ধ্বনিতত্ত্ব{" "}
              </span>
              <span className="text-red-700 ml-5">
                খ- রুপতত্ত্ব/শব্দতত্ত্ব{" "}
              </span>
              <span className="text-red-700 ml-5">
                গ- বাক্যতত্ত্ব/পদতত্ত্ব{" "}
              </span>
              <span className="text-red-700 ml-5">
                ঘ- অর্থতত্ত্ব/বাগর্থ বিজ্ঞান{" "}
              </span>
            </span>
          </p>
        </div>
        <Alocchabisoy />
      </div>
      <Footer />
    </div>
  );
};

export default Banglaaloccobisoy;
