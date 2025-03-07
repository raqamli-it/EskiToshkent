import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { RiFileDownloadLine } from "react-icons/ri";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Library() {
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.library);
      console.log(response, "library");
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //
  console.log(apiData);

  return (
    <div className="library_container">
      <PageTitle title={"Kutubxona"} />
      <div className="library_content_container">
        <div className="">
          <div className="mt-6 grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* card start */}
            {apiData?.results?.map((library) => {
              return (
                <div
                  className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                  key={library.id}
                >
                  <img
                    className="rounded-t-lg px-5 py-30 max-w-full max-h-full"
                    src={library.image}
                    alt="step3"
                  />
                  <div className="px-5 pb-5 flex justify-between items-start gap-5">
                    <h5 className="tracking-tight text-['18px'] text-black w-[60%]">
                      {library.title_uz}
                    </h5>

                    <div className="flex justify-between items-center w-[40%] bg-[#06d6a0] p-2">
                      <a
                        href={library.file}
                        target="_blank"
                        className="flex items-center block w-[85%]"
                      >
                        Ko'proq o'qi
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Repeat similar code for other cards */}
          </div>
        </div>
      </div>
    </div>
  );
}
