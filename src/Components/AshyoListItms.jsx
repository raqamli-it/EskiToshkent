import React, { useEffect, useState } from "react";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useNavigate } from "react-router-dom";

export default function AshyoListItms({ id }) {
  const navigate = useNavigate();

  const [apiData, setApiData] = useState();

  const fetchData = async () => {
    const response = await DataService.get(id);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="full_card_container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {apiData?.map((ashyo) => {
            return (
              <div
                className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
                key={ashyo.id}
                onClick={() => navigate(`/ashyolarDetail/${ashyo.id}`)}
              >
                <img
                  src={ashyo.image}
                  alt="Img by Meriç Dağlı https://unsplash.com/@meric"
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50  text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">{ashyo.title_uz}</h1>
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: ashyo.context_uz }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
