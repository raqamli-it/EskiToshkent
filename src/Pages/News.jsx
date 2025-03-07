import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import dateFormat from "dateformat";
import "../assets/styles/block/_newsPage.scss";

export default function News() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  // const yourToken = localStorage.getItem("JADIDLAR_TOKEN");
  const [apiData, setApiData] = useState([]);

  const fetchData = () => {
    fetch("http://subdomain.qadimiytoshkent.uz/news/")
      .then((response) => response.json())
      .then((repo) => {
        console.log("API Response:", repo);
        setApiData(repo);
      })
      .catch((error) => console.error("API Fetch Error:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="news_container">
      <PageTitle title={"Yangiliklar"} />
      <section className="news_card_container lg:px-10">
        <div className="container px-6 pb-10 mx-auto">
          <div className="grid grid-cols-3 gap-6 xl:grid-cols-2 lg:lg:grid-cols-1">
            {apiData?.map((news) => (
              <div
                key={news.id}
                className="flex group justify-between overflow-hidden cursor-pointer bg-[#414040c0] rounded-[16px]"
              >
                <img
                  className="relative z-10 object-cover w-3/5 h-[300px] group-hover:rounded-[20px] group-hover:scale-90 transition-all duration-500"
                  src={news.image}
                  alt="fff"
                />

                <div className="w-2/5 bg-transparent text-white px-2 py-4 flex flex-col justify-between text-center">
                  <div>
                    <a
                      onClick={() => navigate(`/newsDetail/${news.id}`)}
                      className="font-semibold text-[18px]"
                    >
                      {news.title_uz}
                    </a>

                    {/* <p
                      className="news_p mt-1"
                      dangerouslySetInnerHTML={{ __html: news.context_uz }}
                    ></p> */}
                    <p
                      className="news_p mt-1"
                      dangerouslySetInnerHTML={{
                        __html:
                          news.context_uz.length > 250
                            ? news.context_uz.slice(0, 250) + "..."
                            : news.context_uz,
                      }}
                    ></p>
                  </div>

                  <p className="create_time mt-3 text-[18px]">
                     {dateFormat(news.create, "dd.mm.yyyy")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
