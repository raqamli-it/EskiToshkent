import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";

export default function NewsDetail() {
  const route = useParams();
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.newsById(route?.id));
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="arxeology_detail_container">
      <PageTitle title={apiData?.title_uz} />
      <div className="arxeology_detail_content">
        <div className="w-4/5 mx-auto mb-14">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <div className="my-6">
              <span
                className="text-[#2f2e2e]"
                dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
              ></span>
            </div>

            <div className="w-full h-[550px]">
              <img src={apiData?.image} alt="img" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
