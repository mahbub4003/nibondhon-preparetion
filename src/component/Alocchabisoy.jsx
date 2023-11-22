import tk from "../assets/Untitled.png";
const Alocchabisoy = () => {
  return (
    <div>
      <div className="m-5 sm:p-3 bg-white">
        <div className=" sm:justify-between ml-5 flex-wrap">
          <div className="border border-indigo-600 p-2">
            <div className="text-red-700 p-3">ক- ধ্বনিতত্ত্ব </div>
            <div>
              <h3 className="ml-3">
                {"=> "}ধ্বনি, বাগযন্ত্র, বর্ণ, সন্ধি, ণত্ব- ষত্ববিধি, বর্ণমালা,
                লিপি ইত্যাদি ধ্বনিতত্ত্ব আলোচিত হয়।
              </h3>
              <br />
              <h4>
                <span className="font-bold underline">টেকনিকঃ </span>{" "}
                <span>
                  ধ্বনি ণ, ষ, বাগযন্ত্র, এবং বর্ণের সাথে সন্ধি করে ফেললো।{" "}
                </span>
                <br />
                <br />
                <span className=" bg-green-200">
                  *** সন্ধি ব্যকরনের কোন অংশে আলোচিত হয়?{" "}
                </span>
              </h4>
            </div>
          </div>
          <div className="border border-indigo-600 p-2 m-1">
            <div className="text-red-700 p-3">খ- রুপতত্ত্ব/শব্দতত্ত্ব </div>
            <div>
              <h3 className="ml-3">
                {"=> "}রুপতত্ত্ব/শব্দতত্ত্ব নিবন্ধনের জন্য ইম্পরট্যান্ট নয়, তাই
                আমরা ইহা পড়বো না...
              </h3>
              <br />
              <h4>
                <span className="font-bold underline"></span> <span></span>
                <br />
                <br />
                <span className=" bg-green-200"></span>
              </h4>
            </div>
          </div>

          <div className="border border-indigo-600 p-2 m-1">
            <div className="text-red-700 ">গ- বাক্যতত্ত্ব/পদতত্ত্ব </div>
            <div>
              <h3 className="ml-3">
                {"=> "}পদ বিন্যাস, পদ পরিবর্তন, এক কথায় প্রকাশ, বাক্য সংকোচন,
                বাচ্য, উক্তি, প্রবাদ-প্রবচন, যতিচহ্ন, বাংলা অনুজ্ঞা, কারক
                ইত্যাদি ব্যকরনের বাক্যতত্ত্ব/পদতত্ত্ব অংশে আলোচিত হয়।
              </h3>
              <br />
              <h4>
                <span className="font-bold underline">টেকনিকঃ </span>{" "}
                <img src={tk} alt="" />
                <br />
                <br />
                <span className=" bg-green-200">
                  *** কারক ব্যকরনের কোন অংশে আলোচিত হয়?{" "}
                </span>
              </h4>
            </div>
          </div>
          <div className="border border-indigo-600 p-2 m-1">
            <div className="text-red-700 ">ঘ- অর্থতত্ত্ব/বাগর্থ বিজ্ঞান </div>
            <div>
              <h3 className="ml-3">
                {"=> "}বিপরীত শব্দ, বাগধারা, প্রতিশব্দ, বাক্যের অর্থ ইত্যাদি
                ব্যকরনের অর্থতত্ত্ব/বাগর্থ বিজ্ঞান অংশে আলোচিত হয়।
              </h3>
              <br />
              <h4>
                <span className="font-bold underline">মনে রাখুনঃ </span>
                {"  "}
                <span className=" bg-green-200">
                  {" "}
                  &apos;পদ ও পদ প্রকরণ &apos; রূপতত্ত্বে আলোচিত হয় কিন্তু পদ
                  পরিবর্তন বাক্যতত্ত্বে আলোচিত হয়।{" "}
                </span>
                <br />
                <br />
                <span className=" bg-green-200"></span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alocchabisoy;
