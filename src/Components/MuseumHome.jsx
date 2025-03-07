import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";

export default function MuseumHome() {
  const navigate = useNavigate();
  // API bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.museum);
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="museum_home_container">
      <div className="title_container">
        <h1 className="title">Muzeylar</h1>
        <Link to="/museum">
          <p>
            <span>BARCHASI</span> <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 5000, // 5 sekundlik kechikish
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper"
      >
        {apiData?.map((museumHome) => {
          // response ni to'g'ridan-to'g'ri ishlatamiz
          return (
            <SwiperSlide key={museumHome.id}>
              <div
                className="museum_home_content"
                onClick={() => navigate(`/museumDetail/${museumHome.id}`)}
              >
                <div className="museum_home_img">
                  <div className="museum_home_img_card">
                    <img src={museumHome.image} alt="Art Gallery" />
                    <div className="museum_home_img_title">
                      {museumHome.title_uz}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
