import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import { RiExternalLinkLine } from "react-icons/ri";
import YodlilarListItems from "../Components/YodgorliklarListItems";

export default function YodgorlikAshyolari() {
  const route = useParams();
  const [apiData, setApiData] = useState([]);
  const [catID, setCatID] = useState(`archaeologies/${route?.id}/items/`);

  const fetchData = async () => {
    try {
      const response = await DataService.get(
        endpoints.arxeologyCatById(route?.id)
      );
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(apiData, "wwwwwwwwwww");

  return (
    <div className="ashyo_container">
      <div className="flex justify-center items-center flex-col">
        <YodlilarListItems id={catID} routeId={route?.id}/>
      </div>
    </div>
  );
}

//<div className="flex justify-center h-[50px] mt-6  sm:h-[100px] lg:h-[200px] items-center scale-[0.4] sm:scale-[0.6] md:scale-[0.7] lg:scale-[1]">
// {apiData?.map((cat) => {
// return (
//   <div
//   className="bg-[white] p-4 max-w-[240px] flex group transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center"
// key={cat?.id}
//>
//{/* <GiPaintedPottery /> */}
//   <img src={cat?.image} alt="surat" className="h-[70px] w-[70px]" />
// <h3 className="text-[15px] w-[160px] group-hover:text-[white] font-bold text-center">
//          {cat.name}
//      </h3>
//       <a
//       className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"
//         onClick={() =>
//           setCatID(`archaeologies/${route?.id}/categories/${cat?.id}/items/`)
//         }
//      >
//          <RiExternalLinkLine className="text-sm" />{" "}
//       </a>
//     </div>
//  );
// })}
//</div>
