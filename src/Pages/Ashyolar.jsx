// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle";
// import { Link, useNavigate } from "react-router-dom";
// import { DataService } from "../config/dataService";
// import { endpoints } from "../config/endpoints";

// export default function Ashyolar() {
//   const navigate = useNavigate();
//   // bu qism api lar bilan ishlash uchun
//   const [apiData, setApiData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await DataService.get(endpoints.ashyo);
//       setApiData(response.results);
//     } catch (error) {
//       console.error("Error fetching category data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(apiData, "xxxxxxxxx");

//   return (
//     <div className="ashyo_container">
//       <PageTitle title={"Ashyolar"} />
//       <div className="full_card_container">
//         <div className="grid grid-cols-4 w-full md:grid-cols-3 gap-6">
//           {apiData?.map((ashyo, index) => {
//             return (
//               <div
//                 className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
//                 key={index}
//                 onClick={() => navigate(`/arxeplogyaAshyolari/${ashyo.id}`)}
//               >
//                 <img
//                   src={ashyo.image}
//                   alt={ashyo.image}
//                   className="h-auto object-cover rounded-lg w-full"
//                 />

//                 <div className="absolute block w-full bottom-0 text-black p-2 rounded-lg">
//                   <h1 className=" mt-2  text-2xl font-semibold">{ashyo.title_uz}</h1>
//                   <p
//                     // className="mt-2"
//                     // dangerouslySetInnerHTML={{ __html: ashyo.context_uz }}
//                   ></p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import PageTitle from "../Components/PageTittle";
// import { useNavigate } from "react-router-dom";
// import { DataService } from "../config/dataService";
// import { endpoints } from "../config/endpoints";

// export default function Ashyolar() {
//   const navigate = useNavigate();
  
//   // API ma'lumotlari
//   const [apiData, setApiData] = useState([]);
//   const [paginationData, setPaginationData] = useState({
//     currentPage: 1,
//     lastPage: 1,
//     next: null,
//     previous: null,
//   });

//   const fetchData = async (page = 1) => {
//     try {
//       const response = await DataService.get(`${endpoints.ashyo}?page=${page}`);
//       setApiData(response.results);
//       setPaginationData(response.pagination);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   // Sahifani o'zgartirish
//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= paginationData.lastPage) {
//       fetchData(page);
//     }
//   };

//   return (
//     <div className="ashyo_container">
//       <PageTitle title={"Ashyolar"} />
//       <div className="full_card_container">
//         <div className="grid grid-cols-4 w-full md:grid-cols-3 gap-6">
//           {apiData?.map((ashyo) => (
//             <div
//               className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
//               key={ashyo.id}
//               onClick={() => navigate(`/arxeplogyaAshyolari/${ashyo.id}`)}
//             >
//               <img
//                 src={ashyo.image}
//                 alt={ashyo.title_uz}
//                 className="h-auto object-cover rounded-lg w-full"
//               />
//               <div className="absolute block w-full bottom-0 text-black p-2 rounded-lg">
//                 <h1 className="mt-2 text-2xl font-semibold">{ashyo.title_uz}</h1>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 space-x-4">
//         <button
//           className="px-4 py-2 bg-gray-200 rounded-md"
//           disabled={!paginationData.previous}
//           onClick={() => handlePageChange(paginationData.currentPage - 1)}
//         >
//           Previous
//         </button>
//         <span className="px-4 py-2 bg-gray-100 rounded-md">
//           Page {paginationData.currentPage} of {paginationData.lastPage}
//         </span>
//         <button
//           className="px-4 py-2 bg-gray-200 rounded-md"
//           disabled={!paginationData.next}
//           onClick={() => handlePageChange(paginationData.currentPage + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Ashyolar() {
  const navigate = useNavigate();
  
  // API ma'lumotlari
  const [apiData, setApiData] = useState([]);
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    lastPage: 1,
    next: null,
    previous: null,
  });

  const fetchData = async (page = 1) => {
    try {
      const response = await DataService.get(`${endpoints.ashyo}?page=${page}`);
      setApiData(response.results);
      setPaginationData(response.pagination);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Sahifani o'zgartirish
  const handlePageChange = (page) => {
    if (page >= 1 && page <= paginationData.lastPage) {
      fetchData(page);
    }
  };

  // Sahifa raqamlarini chiqarish uchun funksiya
  const renderPageNumbers = () => {
    const { currentPage, lastPage } = paginationData;
    const pages = [];
    const delta = 2; // Hozirgi sahifadan oldin va keyin nechtasini chiqarish

    let left = Math.max(1, currentPage - delta);
    let right = Math.min(lastPage, currentPage + delta);

    if (left > 1) pages.push(1);
    if (left > 2) pages.push("...");

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < lastPage - 1) pages.push("...");
    if (right < lastPage) pages.push(lastPage);

    return pages;
  };

  return (
    <div className="ashyo_container">
      <PageTitle title={"Ashyolar"} />
      <div className="full_card_container">
        <div className="grid grid-cols-4 w-full md:grid-cols-3 gap-6">
          {apiData?.map((ashyo) => (
            <div
              className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
              key={ashyo.id}
              onClick={() => navigate(`/arxeplogyaAshyolari/${ashyo.id}`)}
            >
              <img
                src={ashyo.image}
                alt={ashyo.title_uz}
                className="h-auto object-cover rounded-lg w-full"
              />
              <div className="absolute block w-full bottom-0 text-black p-2 rounded-lg">
                <h1 className="mt-2 text-2xl font-semibold">{ashyo.title_uz}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          className="px-4 mb-10 py-2 bg-gray-200 rounded-md"
          disabled={!paginationData.previous}
          onClick={() => handlePageChange(paginationData.currentPage - 1)}
        >
          Orqaga
        </button>

        {renderPageNumbers().map((page, index) => (
          <button
            key={index}
            className={`px-4 mb-10 py-2 rounded-md ${
              page === paginationData.currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          className="px-4 mb-10 py-2 bg-gray-200 rounded-md"
          disabled={!paginationData.next}
          onClick={() => handlePageChange(paginationData.currentPage + 1)}
        >
          Keyingi
        </button>
      </div>
    </div>
  );
}
