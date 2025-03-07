import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Museum() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.museum);
      console.log(response, "museum");
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  //

  return (
    <div className="muzey_container">
      <PageTitle title={"Muzeylar"} />
      <div className="museum_content_container overflow-x-hidden">
        <div className="museum_content h-full place-items-center gap-x-4 gap-y-6 grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {apiData?.map((museum) => {
            return (
              // <Link to="/museumDetail" key={museum.id}>
              <div className="museum_page_card" key={museum?.id}>
                <div
                  className="overflow-hidden rounded-md"
                  onClick={() => navigate(`/museumDetail/${museum?.id}`)}
                >
                  <img
                    className="w-full duration-300 hover:scale-110 hover:opacity-95 shadow-md"
                    src={museum?.image}
                    alt=""
                  />
                </div>

                <div className="museum_info">
                  <h1
                    className="text-xl font-semibold text-gray-900 line-clamp-1"
                    onClick={() => navigate(`/museumDetail/${museum.id}`)}
                  >
                    {museum?.title_uz}
                  </h1>

                  <a
                    target="_blank"
                    href={museum?.link}
                    className="text-[#6a1717d6] flex items-center font-bold my-2"
                  >
                    <span>Muzeyni onlayn sayohat qilish</span> <span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
