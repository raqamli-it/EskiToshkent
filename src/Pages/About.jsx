import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import AboutTitle from "../Components/AboutTitle";

export default function About() {
  // bu qism api lar bilan ishlash uchun
  const [apiDataAbout, setApiDataAbout] = useState([]);

  const fetchDataAbout = async () => {
    try {
      const response = await DataService.get(endpoints.about);

      setApiDataAbout(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchDataAbout();
  }, []);
  //
  // bu qism api lar bilan ishlash uchun
  const [apiDataOlimlar, setApiDataOlimlar] = useState([]);

  const fetchDataOlimlar = async () => {
    try {
      const response = await DataService.get(endpoints.olimlar);

      setApiDataOlimlar(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchDataOlimlar();
  }, []);
  //

  return (
    <div className="bg-white">
      <AboutTitle />

      <div className="about_content_container relative md:px-8">
        <div className="about_title">
          {apiDataAbout?.slice(0, 1).map((about) => {
            return (
              <div className="about_describtion" key={about.id}>
                <p>{about.description_uz}</p>
              </div>
            );
          })}
        </div>

        <div className="people_box_card relative z-20">
          <h2 className="text-[32px] md:text-[24px]">Ishtirokchilar</h2>
          {/* .slice(0, 4) */}
          <div className="people_container pt-5 grid grid-cols-4 gap-5 xl:grid-cols-3 gap-y-20 lg:grid-cols-2 md:grid-cols-1">
            {apiDataOlimlar?.results?.map((olimlar) => {
              return (
                <div className="people_card" key={olimlar.id}>
                  <img src={olimlar.image} alt="rasm" />
                  <div className="people_content">
                    <h4 className="people_name">{olimlar.fullname_uz}</h4>

                    <p>{olimlar.pasition_uz}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <div className="w-full z-10 h-[160px] absolute top-80 left-0 mx-auto bg-[#e53636fc]"></div> */}
      </div>
    </div>
  );
}
