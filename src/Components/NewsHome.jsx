import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import dateFormat from "dateformat";

export default function ArxeologyHome() {
  const navigate = useNavigate();
  // API bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = () => {
    fetch("http://subdomain.eskitoshkent.uz/news/")
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
    <div className="swiper_archi_container">
      <div className="title_container">
        <h1 className="title">Yangiliklar</h1>
        <Link to="/news">
          <p>
            <span>BARCHASI</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          695: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          696: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {apiData?.map((newsHome) => {
          // .response olib tashlandi
          return (
            <SwiperSlide key={newsHome.id}>
              <div className="exhibition-card">
                <div className="exhibition-image">
                  <img src={newsHome.image} alt="Exhibition Image" />
                </div>

                <div className="exhibition-info">
                  <h2 className="exhibition-title">{newsHome.title_uz}</h2>
                  <a className="exhibition-link">
                    <p className="exhibition-date">
                      {dateFormat(newsHome.create, "dd.mm.yyyy")}
                    </p>
                    <button
                      className="more_button"
                      onClick={() => navigate(`/newsDetail/${newsHome.id}`)}
                    >
                      Batafsil
                    </button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
