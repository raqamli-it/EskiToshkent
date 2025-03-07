import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function ArxAshiyoList() {
  const { id } = useParams();
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.ashyo);
      setApiData(response.results);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const arxAshiyoList = apiData.find((value) => value.id == id);

  if (!arxAshiyoList) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-md w-full  mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">{arxAshiyoList.title_uz}</h1>
      <div className="flex flex-row items-start w-full bg-white p-4 rounded-lg shadow">
        <img src={arxAshiyoList.image} alt="Image" className="w-1/2 rounded-lg mr-4" />
        <div className="w-1/20 text-gray-700" dangerouslySetInnerHTML={{ __html: arxAshiyoList.context_uz }}></div>
      </div>
    </div>
  );
}