import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function AshyolarDetail() {
  const { archaeologyId, itemId } = useParams(); // URL-dan ikkita ID olish

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(archaeologyId, itemId);
        const response = await DataService.get(endpoints.arxeologyCatById(archaeologyId, itemId));
        console.log(response.id)
        setApiData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (archaeologyId && itemId) {
      fetchData();
    }
  }, [archaeologyId, itemId]);

  if (!apiData) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div className="bg-[white] py-6 px-4">
      <PageTitle title={apiData.title_uz} />
      <div className="detail_container_ashyo">
        <div className="detail_img_ashyo">
          <img src={apiData.image} alt={apiData.title_uz} />
        </div>

        <div className="detail_title_ashyo">
          <h1 className="my-4">{apiData.title_uz}</h1>

          <div className="detail_describtion_ashyo text-wrap">
            <p
              className="text-detail1"
              dangerouslySetInnerHTML={{ __html: apiData.context_uz }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
}
